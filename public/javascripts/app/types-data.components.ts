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
                    imagePath: 'images/attackIndication.png'
                },
                {
                    header: 'Data Leakage',
                    number: _data.DataLeakage,
                    imagePath: 'images/dataLeakage.png'
                }
            ]
            this.secondRow = [
                {
                    header: 'Phishing',
                    number: _data.Phishing,
                    imagePath: 'images/phishing.png'
                },
                {
                    header: 'Brand Security',
                    number: _data.BrandSecurity,
                    imagePath: 'images/brandSecurity.png'
                }
            ]
            this.thirdRow = [
                {
                    header: 'Exploitable Data',
                    number: _data.ExploitableData,
                    imagePath: 'images/exploitableData.png'
                },
                {
                    header: 'VIP',
                    number: _data.vip,
                    imagePath: 'images/vip.png'
                }
            ]
        }
    }
}