import { LightningElement } from 'lwc';

export default class Popover extends LightningElement {

    menuItemImageSrc = '';

    handleMenuItemImageUpload(event){
        console.log({...event.detail.files});
        this.menuItemImageSrc = `/sfc/servlet.shepherd/document/download/${event.detail.files[0].contentVersionId}`;
        console.log(this.menuItemImageSrc);
    }
}