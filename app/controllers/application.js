import Controller from '@ember/controller';
import EmberObject, { action } from '@ember/object';
import moment from 'moment';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked startDate = moment();

  event = EmberObject.create({
    start: moment(), //moment or string
    end: moment().add(4, 'hours'),
    title: 'Meeting with Tomster',
    description: 'Coffee to discuss Tomster and Zoey\'s upcoming raise',
    location: '1234 North Port, Nowhere USA'
  });

  @action
  myAction() {
    console.log('action called');
  }
}
