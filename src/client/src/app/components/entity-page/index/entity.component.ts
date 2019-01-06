import {BreakpointObserver} from '@angular/cdk/layout';

import {PageComponent} from '@app/core/page.component';
import {DialogService} from 'primeng/api';
import {OnInit} from '@angular/core';
import {ClientService} from '@app/core/client-service';

export class EntityComponent<M, C, S extends ClientService<M>, F> extends PageComponent implements OnInit {
    isNewItem = false;
    editingItem: Partial<M>;

    constructor(public service: S, breakpointObserver: BreakpointObserver, public uiConfig: C, public dialogService: DialogService, private form: F) {
        super(breakpointObserver);
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
        const  editingItem =  this.service.instanceCreate(source);
        this.dialogService.open(this.form, {
            data: {
                uiConfig:this.uiConfig,
                item: editingItem,
                source: source,
                launcher: this,
                isNewItem: isNewItem,
                save: this.save.bind(this),
                delete: this.delete.bind(this)
            },
            height: this.isHandset? "100%": "auto",
            width: this.isHandset?"100%": "300px"
        });
    }

    save(isNewItem, source,edited) {
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
