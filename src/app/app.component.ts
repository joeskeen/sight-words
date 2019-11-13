import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { StorageMap, JSONSchema } from '@ngx-pwa/local-storage';
import { filter } from 'rxjs/operators';
import { ModalService } from '@healthcatalyst/cashmere';
import { defaultWords } from './default-words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private readonly key: string = 'wordList';
  private readonly schema: JSONSchema = {
    type: 'array',
    items: { type: 'string' }
  };
  wordList: string[] = defaultWords;
  currentWord: string;
  currentWordStart: number;
  masteredWords: string[] = [];
  unmasteredWords: string[] = defaultWords;
  // masteryMs = 1000;
  masteryMs = 2608;
  running = false;

  @ViewChild('settingsModal', { static: true, read: TemplateRef })
  settingsModal: TemplateRef<any>;

  constructor(private storage: StorageMap, private modals: ModalService) {}

  ngOnInit() {
    this.storage
      .get<string[]>(this.key, this.schema)
      .pipe(filter(l => !!l))
      .subscribe(l => {
        this.wordList = l;
        this.unmasteredWords = l.slice();
      });
  }

  get progress() {
    return (100 * this.masteredWords.length) / this.wordList.length;
  }

  save(list: string[]) {
    console.log('saving...', list);
    this.wordList = list;
    this.storage.set(this.key, list, this.schema).subscribe();
  }

  start() {
    this.unmasteredWords = this.wordList.slice();
    this.masteredWords = [];
    this.running = true;
    this.next();
  }

  next() {
    if (this.currentWord) {
      const now = Date.now();
      const time = now - this.currentWordStart;
      if (time <= this.masteryMs) {
        const word = this.currentWord;
        this.masteredWords.push(word);
        this.unmasteredWords = this.unmasteredWords.filter(w => w !== word);
      }
    }
    if (!this.unmasteredWords.length) {
      this.stop();
      return;
    }
    this.currentWord = this.unmasteredWords[
      Math.floor(Math.random() * this.unmasteredWords.length)
    ];
    this.currentWordStart = Date.now();
  }

  stop() {
    this.currentWord = null;
    this.currentWordStart = null;
    this.running = false;
  }

  settings() {
    this.modals
      .open(this.settingsModal, {
        data: this.wordList.join('\n'),
        size: 'md'
      })
      .result.subscribe((words: string) => {
        const list = words
          .split(/\r?\n/g)
          .map(w => w.trim())
          .filter(w => !!w)
          .reduce((prev, curr) => {
            if (!prev.includes(curr)) {
              prev.push(curr);
            }
            return prev;
          }, []);
        this.save(list);
      });
  }
}
