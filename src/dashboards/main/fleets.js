import AddIcon from '@mui/icons-material/Add';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import DevicesIcon from '@mui/icons-material/Devices';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import * as React from 'react';
import { EditButton, ResourceContextProvider } from 'react-admin';
import EnvVarButton from '../../ui/EnvVarButton';

const Fleets = (props) => {
  let { value } = props;

  return (
    <ResourceContextProvider value='application'>
      <Card sx={{ flex: '1', dispay: 'flex', flexDirection: 'column' }}>
        <CardHeader title='Fleets' sx={{ height: '20px', color: 'white', backgroundColor: '#2196f3' }} />
        <CardContent sx={{ minHeight: 225, overflow: 'auto', flex: '1', display: 'flex', flexDirection: 'column' }}>
          <Grid container spacing={3} sx={{ flex: '1' }}>
            {value.map((record, index) => {
              return (
                <Grid item key={index} xs='auto'>
                  <Card sx={{ minWidth: 200, maxWidth: 200, minHeight: 225, maxHeight: 225 }}>
                    <CardHeader
                      title={record['app name']}
                      sx={{
                        height: '15px',
                        fontWeight: 'bold',
                        backgroundColor: record['is of-class'] === 'app' ? '#bee8ce' : '#eeeeee',
                      }}
                      titleTypographyProps={{ variant: 'inherit' }}
                    />
                    <CardContent sx={{ paddingTop: '4px', paddingBottom: '4px' }}>
                      <Table
                        sx={{
                          [`& .${tableCellClasses.root}`]: {
                            borderBottom: 'none',
                            paddingLeft: '0px',
                            paddingRight: '0px',
                            paddingTop: '2px',
                            paddingBottom: '2px',
                          },
                        }}
                      >
                        <TableBody>
                          <TableRow>
                            <TableCell colSpan={2}>
                              <Chip
                                icon={<CorporateFareIcon />}
                                label={record['organizationName']}
                                variant='outlined'
                                style={{ width: '100%', justifyContent: 'space-between', paddingLeft: '5px' }}
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell colSpan={2}>
                              <Chip
                                icon={<DeveloperBoardIcon />}
                                label={record['deviceTypeName']}
                                variant='outlined'
                                style={{ width: '100%', justifyContent: 'space-between', paddingLeft: '5px' }}
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Class</TableCell>
                            <TableCell align='right'>{record['is of-class']}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Online</TableCell>
                            <TableCell align='right'>{`${record['numOnlineDevices']} / ${record['numDevices']}`}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                    <CardActions sx={{ paddingTop: '4px', paddingBottom: '4px', justifyContent: 'center' }}>
                      <Button
                        variant='text'
                        size='small'
                        href={`/#/device?filter={"belongs to-application": ${record['id']}}`}
                        style={{ minWidth: '40px' }}
                      >
                        <DevicesIcon style={{ marginRight: '4px' }} />
                      </Button>
                      <Button
                        variant='text'
                        size='small'
                        href={`/#/device/create?source={"belongs to-application": ${record['id']}}`}
                        style={{ minWidth: '40px' }}
                      >
                        <AddIcon style={{ marginRight: '4px' }} />
                      </Button>
                      <EditButton record={record} label='' style={{ minWidth: '40px' }} />
                      <EnvVarButton resource='application' record={record} label='' style={{ minWidth: '40px' }} />
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Card>
    </ResourceContextProvider>
  );
};

export default Fleets;
