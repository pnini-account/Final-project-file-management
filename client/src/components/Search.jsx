import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import FolderList from '../pages/SearchResult/folder';
import CategoryList from '../pages/SearchResult/Category';
import FileList from '../pages/SearchResult/file';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchComp({clean}) {
  const token = sessionStorage.getItem("token");
  const [query, setQuery] = useState('');

  const [unauthorized, setUnauthorized] = useState(false);
  const [listOfCategory, setListOfCategory] = useState([]);
  const [listOfFolder, setListOfFolder] = useState([]);
  const [listOfFile, setListOfFile] = useState([]);

  //const [flag, setFlag] = useState(false);
  const [err, setErr] = useState();
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const fetchByQuery = async () => {
    const response = await fetch(`http://localhost:3600/api/filter/${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      }
    })

    if (response.ok) {
      console.log("ppp")
      console.log(response)

      const data = await response.json() ;
      setListOfCategory(data.categories)
      setListOfFolder(data.folders)
      setListOfFile(data.files)
      if(data.length!==0)
      {
        console.log({data});
        clean()
      }
      
       console.log(listOfCategory)
       console.log(listOfFile)
       console.log(listOfFolder)

    }
    else {
      console.log("ppqqqqqqp")

      setUnauthorized(true);
      const err = await response.json();
      setErr(err.message);
      console.log(err.message)
    }}
    fetchByQuery()
  } 
  , [query])

return (
  <Search>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search…"
      onChange={(e) => { setQuery(e.target.value) }}
      inputProps={{ 'aria-label': 'search' }}
    />
    {listOfCategory?.map((c,ind)=><CategoryList key={ind} category={c}></CategoryList>)}
    {listOfFolder?.map((c,ind)=><FolderList key={ind} folder={c}/>)}
    {listOfFile?.map((c,ind)=><FileList key={ind} file={c}/>)}

  </Search>
);
}