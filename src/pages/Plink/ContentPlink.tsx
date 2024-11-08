import { Card, CardContent, Container, Typography } from "@mui/material";

export const ContentToolPlink = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Card sx={{ boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            Introduction
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ textIndent: "2em", pr: 2 }}
          >
            PLINK is a free, open-source whole genome association analysis
            toolset, designed to perform a range of basic, large-scale analyses
            in a computationally efficient manner
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ textIndent: "2em", pr: 2 }}
          >
            In the current study, we assumed that unobserved variants are tokens
            in natural languages which would be predicted from a known paragraph
            of observed variants. In addition to, our approach resolves the
            reference panel privacy problem while improving both the accuracy
            and running time.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};
export const ContentHelpPlink = () => {
  return <></>;
};
