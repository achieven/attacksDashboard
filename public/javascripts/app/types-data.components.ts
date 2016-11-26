import {Input, Component} from 'angular2/core';
// import {Image} from '../../images/webImage.png'
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
                    //image: Image
                },
                {
                    header: 'Data Leakage',
                    number: _data.DataLeakage,
                    //image: Image
                }
            ]
            this.secondRow = [
                {
                    header: 'Phishing',
                    number: _data.Phishing,
                    //image: Image
                },
                {
                    header: 'Brand Security',
                    number: _data.BrandSecurity,
                    //image: Image
                }
            ]
            this.thirdRow = [
                {
                    header: 'Exploitable Data',
                    number: _data.ExploitableData,
                    //image: Image
                },
                {
                    header: 'vip',
                    number: _data.vip,
                    //image: Image
                }
            ]
        }
    }
}