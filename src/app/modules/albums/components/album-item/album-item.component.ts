import { Component, Input } from '@angular/core';

import { Album } from '../../interfaces/album';
import { Image } from '../../../shared/shared.module';

@Component({
  selector: 'prp-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.scss']
})
export class AlbumItemComponent {

    get image(): Image {
        return this.album.images[1];
    }

    get imageWidthPx(): string {
        return this.imageWidth + 'px';
    }

    get imageAlt(): string {
        return `Image of ${this.album.name} album`;
    }

    @Input()
    album: Album;

    @Input()
    imageWidth: number;
}
