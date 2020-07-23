
import * as moment from 'moment';

export class SCMilestoneModel {
    id: number;
    title: string;
    description: string;
    deadline: string;
    price: number;

    constructor(data: any) {
        this.id = data.id || null;
        this.title = data.title || null;
        this.description = data.description || null;
        this.deadline = data.deadline || null;
        this.price = data.price || null;
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
