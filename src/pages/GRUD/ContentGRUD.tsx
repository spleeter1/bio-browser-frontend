import { Card, CardContent, Container, Typography } from "@mui/material";

export const ContentToolGRUD = () => {
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
            This tool contains a Python implementation of GRUD model, which is a
            genotype imputation based on deep learning algorithms. In specific,
            GRUD is composed of two components: Generator and Discriminator. The
            generator model undertakes a mission to create tokens, and the
            discriminator tries to verify tokens created by the generator model.
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
export const ContentUploadFileGRUD = () => {
  return (
    <Container>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ paddingTop: "10px", textIndent: "2em", pr: 2 }}
      >
        Type of input data: Phased genotype with HAP/LEGEND format ( For
        details, please see{" "}
        <a href="https://github.com/kanamekojima/rnnimp" target="_blank">
          https://github.com/kanamekojima/rnnimp
        </a>
        ) Weighted of trained model Type of output data: Genotype imputation
        results in Oxford GEN format VCF format
      </Typography>
    </Container>
  );
};
export const ContentHelpGRUD = () => {
  return <></>;
};
export const ContentToturialGRUD = () => {
  return <></>;
};
