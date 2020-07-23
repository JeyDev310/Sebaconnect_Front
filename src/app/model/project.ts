
import * as moment from 'moment';

export class SCProjectModel {
    uid: number;
    name: string;
    img: string;
    description: string;
    requesting: number; // no need to upload
    price: number;
    share: number; // no need to upload
    milestone: number;
    status: string; // no need to upload
    endDate?: string;
    closeDays?: number;


    constructor(data: any) {
        this.uid = data.uid;
        this.name = data.name;
        this.img = data.requestIds;
        this.description = data.description;
        this.requesting = data.requesting;
        this.price = data.price;
        this.share = data.share;
        this.milestone = data.milestone;
        this.status = data.status;
        this.endDate = data.endDate;
        this.closeDays = data.closeDays;
    }

    // toJSON(): any {
    //     const dicObject = Object.assign({}, this, {
    //         requests: this.requests ? this.requests.map(value => value.toJSON()) : undefined,
    //         payers: this.payers ? this.payers.map(value => value.toJSON()) : undefined,
    //         paymentApprovers: this.paymentApprovers ? this.paymentApprovers.map(value => value.toJSON()) : undefined,
    //         paidAt: this.paidAt ? moment(this.paidAt).get('second') : undefined,
    //         createdAt: moment(this.createdAt).get('second')
    //     });
    //     return JSON.parse(JSON.stringify(dicObject));
    // }
  }
