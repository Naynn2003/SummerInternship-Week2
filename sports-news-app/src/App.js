import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [sportsNews, setSportsNews] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://inshorts.me/news/topics/sports?offset=0&limit=21';

    axios.get(apiUrl)
      .then(response => {
        const sportsNewsData = response.data.data.articles;
        setSportsNews(sportsNewsData);
      })
      .catch(error => {
        console.error('Error fetching sports news:', error);
      });
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {sportsNews.map((newsItem, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              {newsItem.imageUrl && (
                <Card.Img
                  variant="top"
                  src={newsItem.imageUrl}
                  style={{ maxHeight: '200px', objectFit: 'cover' }}
                />
              )}
              <Card.Body>
                <Card.Title>{newsItem.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{newsItem.subtitle}</Card.Subtitle>
                <Card.Text>{newsItem.content}</Card.Text>
                <Card.Text>Author: {newsItem.authorName}</Card.Text>
                <Card.Text>Source: {newsItem.sourceName}</Card.Text>
                <Card.Text>Date: {new Date(newsItem.createdAt).toLocaleDateString()}</Card.Text>
                <Card.Text>Time: {new Date(newsItem.createdAt).toLocaleTimeString()}</Card.Text>
                <Card.Link href={newsItem.sourceUrl} target="_blank">
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
