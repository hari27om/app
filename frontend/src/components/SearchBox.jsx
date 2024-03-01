import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const location = useLocation();

  const [keyword, setKeyword] = useState(urlKeyword || '');

  let debounceTimer;

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      if (value) {
        navigate(`/search/${value.trim()}`);
      } else {
        navigate('/');
      }
    }, 400);
  };

  useEffect(() => {
    // Clear search input when route changes to home but not when it changes to search result page
    if ( !location.pathname.startsWith('/search')) {
      setKeyword('');
    }
  }, [location.pathname]);

  return (
    <Form onSubmit={submitHandler} className='d-flex'>
      <Form.Control
        type='text'
        name='q'
        onChange={handleInputChange}
        value={keyword}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
    </Form>
  );
};

export default SearchBox;
