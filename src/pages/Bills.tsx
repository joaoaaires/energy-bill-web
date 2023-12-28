import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Grid, Typography } from "@mui/material"
import { useCallback, useEffect, useState } from 'react';
import RedditTextField from "../components/RedditTextField";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { api } from "../services/api";
import { Bill } from "../models/Bill";
import BillNotFound from "../components/BillNotFound";

function Bills() {
  const [query, setQuery] = useState<string>()
  const [bills, setBills] = useState<Bill[]>([])
  const baseUrlDownload = api.defaults.baseURL + '/uploads' 

  const fetchBill = useCallback(async () =>  {
    let url = '/bill?page=0&perPage=1000'
    if (query) url = url + '&query='+query
    const response = await api.get<Bill[]>(url)
    setBills(response.data);
  }, [setBills, query])

  useEffect(() => {
    fetchBill()
  }, [fetchBill, query])

  return (
    <Box sx={{ flexGrow: 1 }} padding={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <RedditTextField
            fullWidth
            label="Pesquisar pelo número do cliente"
            id="reddit-input"
            variant="filled"
            style={{ marginTop: 11 }}
            onChange={(event) => setQuery(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
        {bills.length ? (
          bills.map(bill => (
            <Accordion key={bill.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{ bill.customerName + ' - ' + bill.reference + ' - R$ ' + (bill.total / 100) }</Typography>
              </AccordionSummary>
              <AccordionDetails>
                { bill.items.map((item) => (
                  <Grid container spacing={2}>
                    <Grid item xs={2}>
                    <Typography>
                      {item.description}
                    </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>
                        {item.quantity > 1 ? item.quantity : ''}
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography>
                        {'R$ ' + item.total / 100}
                      </Typography>
                    </Grid>
                  </Grid>
                )) }
                <Button variant="contained" href={`${baseUrlDownload}/${bill.fileName}`} target="_blank" sx={{marginTop:3}}>Download</Button>
              </AccordionDetails>
            </Accordion>
          ))
        ) : (
          <Grid item xs={12}>
            <BillNotFound />
          </Grid>
        )}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Bills