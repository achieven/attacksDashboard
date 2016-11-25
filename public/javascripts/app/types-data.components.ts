import {Input, Component} from 'angular2/core';


@Component({
    selector: 'types-data',
    templateUrl: 'templates/types-data.html'
})

export class TypesDataComponent {
    attackIndication:number = 0;
    dataLeakage:number = 0;
    phishing:number = 0;
    brandSecurity:number = 0;
    exploitableData:number = 0;
    vip:number = 0;

    @Input() set _data(_data:any) {
        if (_data) {
            this.attackIndication = _data.AttackIndication;
            this.dataLeakage = _data.DataLeakage;
            this.phishing = _data.AttackIndication;
            this.brandSecurity = _data.BrandSecurity;
            this.exploitableData = _data.ExploitableData;
            this.vip = _data.vip;
        }
    }
}