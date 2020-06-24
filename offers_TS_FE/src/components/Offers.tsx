import * as React from 'react'
import data from '../data/listjob.json';
import { Grid, Paper, Typography, Button } from '@talentsoft/design-system';
import { Location, Clock  } from "@talentsoft/icons";

const HelloPage = () => {
    return (<div>
 		<h1>Hello World from Offers! </h1>
		 {console.log('data', data)}
		 {data.jobs.map(job => {
			return (<Grid item xs={12}>
				<Paper style={{padding:'10px', margin:'5px'}}>
		 			<Typography variant='h3'>{job.title}</Typography>
		 			<div style={{display:'flex', justifyContent:"space-between"}}>
						<div style={{display: 'flex', marginTop:'8px'}}>
							<Location /><Typography variant='h6' style={{marginLeft:'8px', marginRight:'8px'}}>{job.city}</Typography>
		 					<Clock/><Typography variant='h6'style={{marginLeft:'8px', marginRight:'8px'}} >{job.contract}</Typography>
					 	</div>
					 	<Button variant='contained' color="primary">View Job</Button>
					 </div>
				</Paper>
			</Grid>)
		 })}
	</div>
)}

export default HelloPage;