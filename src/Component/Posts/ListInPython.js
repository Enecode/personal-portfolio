// ListInPython.js
import React from 'react';
import { styled } from '@mui/system';
import { Container, Typography } from '@mui/material';

// Define styled components
const ArticleContainer = styled(Container)({
  marginTop: '20px',
});

const SectionTitle = styled(Typography)({
  marginTop: '16px',
  marginBottom: '8px',
});

const CodeBlock = styled('pre')({
  backgroundColor: '#f8f8f8',
  padding: '10px',
  borderRadius: '4px',
  overflowX: 'auto',
});

const ListInPython = () => {
  return (
    <ArticleContainer>
      <Typography variant="h4" gutterBottom>
        Technical Article: Lists in Python
      </Typography>

      <SectionTitle variant="h5">I. Introduction to Lists</SectionTitle>
      <Typography variant="body1">
        A list is a collection of items in a particular order.
      </Typography>

      <SectionTitle variant="h6">A. Definition of a List:</SectionTitle>
      <Typography variant="body1">
        A list is a collection of items in a particular order.
      </Typography>

      <SectionTitle variant="h6">B. List Items:</SectionTitle>
      <Typography variant="body1">
        Items in a list can be of any data type.
      </Typography>
      <CodeBlock>{`python\nmy_list = [1, 'apple', 3.14, True]`}</CodeBlock>

      {/* Continue with other sections... */}

      <SectionTitle variant="h5">VI. Sorting and Copying Lists</SectionTitle>
      <SectionTitle variant="h6">A. The sort() Method:</SectionTitle>
      <Typography variant="body1">
        Sort the list in ascending order.
      </Typography>
      <CodeBlock>{`python\nfruits.sort()`}</CodeBlock>

      {/* Continue with other sections... */}
    </ArticleContainer>
  );
};

export default ListInPython;
