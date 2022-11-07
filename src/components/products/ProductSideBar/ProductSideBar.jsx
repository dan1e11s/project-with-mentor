import React, { useEffect, useState } from 'react';
import '../../../styles/ProductSideBar.css';
import FilterProduct from '../FilterProduct/FilterProduct';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../../../contexts/ProductContextProvider';
import { InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const ProductSideBar = ({ isSideBar, setPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('q') || '');

  const { getProducts } = useProducts();

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  return isSideBar ? (
    <div className="sideBar">
      <h2 className="sideBar_title" id="demo-controlled-radio-buttons-group">
        <span>Categories</span>
      </h2>
      <div
        style={{
          backgroundColor: '#fff',
          margin: '0 4px',
          borderRadius: '10px',
        }}
      >
        <InputBase
          sx={{ flex: 1 }}
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search...' }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>
      {/* <Divider /> */}
      <FilterProduct />
    </div>
  ) : null;
};

export default ProductSideBar;
