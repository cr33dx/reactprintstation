import React from 'react'
import './PdfTools.css';
import { Typography } from '@mui/material';
import { Card, CardGroup } from 'react-bootstrap';
// import { StyleSheet, Dimensions, View } from 'react-native';
// import Pdf from 'react-native-pdf';

export default function PdfUploader() {
  // const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
  return (
    <div>
      <div className="header-content">
        <Typography variant="h4">PDF Converter Tools</Typography>
        <Typography variant="h5">Use PDF Converter tools to convert your documents in different file formats with Duplichecker.</Typography>
      </div>
      <div className="uploader">
        <div>
          <CardGroup>
            <Card className="customize-card">
              <Card.Body>
                <Card.Title>PDF Enhancer</Card.Title>
                {/* <View style={styles.container}>
                <Pdf
                  source={source}
                  onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`number of pages: ${numberOfPages}`);
                  }}
                  onPageChanged={(page, numberOfPages) => {
                    console.log(`current page: ${page}`);
                  }}
                  onError={(error) => {
                    console.log(error);
                  }}
                  style={styles.pdf} />
              </View> */}
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Total Amount: 200</small>
              </Card.Footer>
            </Card>
            <Card className="customize-card">
              <Card.Body>
                <Card.Title>Compress PDF</Card.Title>
                <Card.Text>1 Page : 0.75/Page</Card.Text>
                <Card.Text>Total Page : 10</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Total Amount: 200</small>
              </Card.Footer>
            </Card>
            <Card className="customize-card">
              <Card.Body>
                <Card.Title>Merge PDF</Card.Title>
                <Card.Text>1 Page : 0.75/Page</Card.Text>
                <Card.Text>Total Page : 10</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Total Amount: 200</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
        <div className="customise-content">
          <CardGroup>
            <Card className="customize-card">
              <Card.Body>
                <Card.Title>Split PDF</Card.Title>
                <Card.Text>1 Page : 0.75/Page</Card.Text>
                <Card.Text>Total Page : 10</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Total Amount: 200</small>
              </Card.Footer>
            </Card>
            <Card className="customize-card">
              <Card.Body>
                <Card.Title>Unlock PDF</Card.Title>
                <Card.Text>1 Page : 0.75/Page</Card.Text>
                <Card.Text>Total Page : 10</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Total Amount: 200</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     marginTop: 25,
//   },
//   pdf: {
//     flex: 1,
//     width: Dimensions.get('window').width,
//   }
// });