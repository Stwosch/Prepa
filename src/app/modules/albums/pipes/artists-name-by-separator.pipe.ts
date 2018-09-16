import { Pipe, PipeTransform } from '@angular/core';
import { Artist } from '../../artists/artists.module';

@Pipe({
    name: 'artistsNameBySeparator'
})
export class ArtistsNameBySeparatorPipe implements PipeTransform {

    transform(artists: Artist[], separator: string): string {
        return artists.map((artist: Artist) => artist.name).join(separator);
    }
}
