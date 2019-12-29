import { Pipe, PipeTransform } from '@angular/core';
import language from '../langs/en.json';

@Pipe({
    name: 'language'
})
export class LanguagePipe implements PipeTransform {
    transform(value: string): string {
        return language[value];
    }
}