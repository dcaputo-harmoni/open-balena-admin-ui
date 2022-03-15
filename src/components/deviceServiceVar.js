import * as React from "react";
import {
    Create,
    Edit,
    TextField,
    Datagrid,
    ChipField,
    List,
    SimpleForm,
    EditButton,
    ReferenceField,
} from 'react-admin';

const DeviceServiceVarTitle = ({ record }) => {
    return <span>Device Service Environment Variable {record ? `"${record.name}"` : ''}</span>;
};

export const DeviceServiceVarList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <ReferenceField label="Device" source="service install" reference="service install" target="id">
                    <ReferenceField source="device" reference="device" target="id">
                        <ChipField source="uuid" />
                    </ReferenceField>
                </ReferenceField>
                <ReferenceField label="Service" source="service install" reference="service install" target="id">
                    <ReferenceField source="installs-service" reference="service" target="id">
                        <ChipField source="service name" />
                    </ReferenceField>
                </ReferenceField>
                <TextField label="Name" source="name" />
                <TextField label="Value" source="value" />
                <ReferenceField label="Fleet" source="service install" reference="service install" target="id">
                    <ReferenceField source="device" reference="device" target="id">
                        <ReferenceField source="belongs to-application" reference="application" target="id">
                            <ChipField source="app name" />
                        </ReferenceField>
                    </ReferenceField>
                </ReferenceField>
                <EditButton label="" color="default"/>
            </Datagrid>
        </List>
    )
};

export const DeviceServiceVarCreate = props => (
    <Create {...props}>
        <SimpleForm>
        </SimpleForm>
    </Create>
);

export const DeviceServiceVarEdit = props => (
    <Edit title={<DeviceServiceVarTitle />} {...props}>
        <SimpleForm>
        </SimpleForm>
    </Edit>
);

const deviceServiceVar = {
    list: DeviceServiceVarList,
    create: DeviceServiceVarCreate,
    edit: DeviceServiceVarEdit
}

export default deviceServiceVar;