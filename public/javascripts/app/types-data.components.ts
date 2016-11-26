import {Input, Component} from 'angular2/core';
 //import {Image} from '../../images/webImage.png'
import {TypesDataRowComponent} from './types-data-row.components.js'

@Component({
    selector: 'types-data',
    templateUrl: 'templates/types-data.html',
    directives: [TypesDataRowComponent]
})

export class TypesDataComponent {
    firstRow: Object = {}
    secondRow: Object = {}
    thirdRow: Object = {}

    @Input() set _data(_data:any) {
        if (_data) {
            this.firstRow = [
                {
                    header: 'Attack Indication',
                    number: _data.AttackIndication,
                    imagePath: 'images/webImage.png'
                },
                {
                    header: 'Data Leakage',
                    number: _data.DataLeakage,
                    imagePath: 'images/webImage.png'
                }
            ]
            this.secondRow = [
                {
                    header: 'Phishing',
                    number: _data.Phishing,
                    imagePath: 'images/webImage.png'
                },
                {
                    header: 'Brand Security',
                    number: _data.BrandSecurity,
                    imagePath: 'images/webImage.png'
                }
            ]
            this.thirdRow = [
                {
                    header: 'Exploitable Data',
                    number: _data.ExploitableData,
                    imagePath: 'images/webImage.png'
                },
                {
                    header: 'vip',
                    number: _data.vip,
                    imagePath: 'images/webImage.png'
                }
            ]
        }
    }
}