import {Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'titlecase'
})
export class TitleCase implements PipeTransform {    
    transform(value: string, args?: any) {        
        if(!value) return null;
        let words = value.split(' ');
        for(var i=0; i<words.length; i++) {
            if(i> 0 && this.isIgnoredWord(words[i])) 
                words[i] = words[i].toLowerCase();
            else
                words[i] = words[i].substr(0,1).toUpperCase() + words[i].substr(1,words.length).toLowerCase();
        }
        return words.join(' ');        
    }

    private isIgnoredWord(word: string) : boolean {
        let ignoreWords= ['of','the'];
        return ignoreWords.includes(word.toLowerCase())
    }
}

