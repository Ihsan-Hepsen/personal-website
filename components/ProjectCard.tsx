import * as React from 'react';
import {
    Box, Card, CardActions,
    CardContent, Button, Typography
} from '@mui/material'


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
)

type ProjectCard = {
    title: string
    tools: Array<string>
    desc: string
    repoLink: string
}

export default function ProjectCard({ title, tools, desc, repoLink }: ProjectCard) {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined" sx={{ m: 2, p: 1 }}>
                <React.Fragment>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            <b>Built using:</b> {tools.join(', ')}
                        </Typography>
                        <Typography variant="body2">
                            {desc}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            component="a"
                            href={repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="contained"
                            size="small"
                        >
                            View on GitHub
                        </Button>
                    </CardActions>
                </React.Fragment>
            </Card>
        </Box>
    )
}