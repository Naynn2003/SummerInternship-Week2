import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://inshorts.me/news/top?offset=0&limit=21';

    axios.get(apiUrl)
      .then(response => {
        const responseData = response.data.data.articles;
        setNews(responseData);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {news.map((article, index) => (
          <Col md={4} key={index} className='mb-4'>
            <Card>
              {article.imageUrl && (
                <Card.Img
                  variant="top"
                  src={article.imageUrl}
                  style={{ maxHeight: '200px', objectFit: 'cover' }}
                />
              )}
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{article.subtitle}</Card.Subtitle>
                <Card.Text>{article.content}</Card.Text>
                <Card.Text>Author: {article.authorName}</Card.Text>
                <Card.Text>Source: {article.sourceName}</Card.Text>
                <Card.Text>Date: {new Date(article.createdAt).toLocaleDateString()}</Card.Text>
                <Card.Text>Time: {new Date(article.createdAt).toLocaleTimeString()}</Card.Text>
                <Card.Link href={article.sourceUrl} target="_blank">
                  Read more
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
