import {initializeBlock} from '@airtable/blocks/interface/ui';
import './style.css';

// TODO: link Eventbrite API to Airtable
// TODO: Run async function to fetch events from Eventbrite and populate the Airtable base with RSVPS per event.
// TODO: Figure out how to pull from "Order of Response Form"
// TODO: Group data by event and user separately? or one big database. 

const base = useBase();
const table = base.getTableByName('My writable table');
const records = useRecords(table.selectRecords());

// Update cell values
table.updateRecordAsync(record, {'My field name': 'updated value'});
table.updateRecordsAsync([
    {id: record1.id, fields: {'My field name': 'updated value 1'}},
    {id: record2.id, fields: {'My field name': 'updated value 2'}},
]);

// Create records
table.createRecordAsync();
table.createRecordAsync({'My field name': 'new value'});
table.createRecordsAsync([
    {fields: {'My field name': '1'}},
    {fields: {'My field name': '2'}},
    {fields: {'My field name': '3'}},
]);

// Delete records
table.deleteRecordAsync(record);
table.deleteRecordsAsync([record1, record2]);
