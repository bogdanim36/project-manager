import {BreakpointObserver} from '@angular/cdk/layout';

import {PageComponent} from '@app/core/page.component';
import {DialogService} from 'primeng/api';
import {OnInit, Type} from '@angular/core';
import {ClientService} from '@app/core/client-service';
import {AppSharedService} from '@app/core/app-shared.service';

export class EntityIndexComponent<M, C, S> extends PageComponent implements OnInit {
    isNewItem = false;
    form: Type<any>;
    editingItem: Partial<M>;
    protected service: ClientService<M>;
    protected uiConfig: C;
    protected dialogService: DialogService;
    ref: any;

    constructor(protected appShared: AppSharedService, protected formClass: any ) {
        super(appShared);
        this.ref = this;
    }

    ngOnInit() {
        this.service.getAll().then((data) => console.log('get data', data), console.error);
    }

    showDialogToAdd() {
        this.showDialog(true, {});
    }

    showDialogToEdit(event, item) {
        this.showDialog(false, item);
    }

    showDialog(isNewItem: boolean, source) {
        this.isNewItem = isNewItem;
        const editingItem = this.service.instanceCreate(source);
        this.dialogService.open(this.formClass, {
            data: {
                uiConfig: this.uiConfig,
                item: editingItem as M,
                source: source,
                launcher: this,
                isNewItem: isNewItem,
                save: this.save.bind(this),
                delete: this.delete.bind(this)
            },
            height: this.isHandset ? '100%' : 'auto',
            width: this.isHandset ? '100%' : '300px'
        });
    }

    save(isNewItem, source, edited) {
        if (isNewItem)
            this.service.create(edited);
        else
            this.service.update(source, edited);

        this.editingItem = null;
        this.dialogService.dialogComponentRef.instance.close();
    }

    delete(item) {
        this.service.delete(item);
        this.editingItem = null;
        this.dialogService.dialogComponentRef.instance.close();
    }
}
