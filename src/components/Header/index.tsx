import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


type Anchor ='right';
    
export const Header = () => {
    const [state, setState] = React.useState({
        
        right: false,
      });
    
      const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
          if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
              (event as React.KeyboardEvent).key === 'Shift')
          ) {
            return;
          }
    
          setState({ ...state, [anchor]: open });
        };
    
      const list = (anchor: Anchor) => (
        <Box>
          
          <Divider />
          
        </Box>
      );
    
      return (
        <div>
          {(['right'] as const).map((anchor) => (

            <>
                <header id="header" className="item1">
                  <a href="/" id="logo">

                      <img src="../../../public/img/git.png" alt="ícone do git" id="g" />
                      <img src="../../../public/img/github.png" alt="ícone do github" id="g" />
                      Eudis Alves
                  </a>


                    <React.Fragment key={anchor}>
                      <Button id="btn-mobile" onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                      
                      <Drawer
                        id="btn-mobile"
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                      >
                          {

                              <ul id="menu" role="menu">
                                  <li><a href="/">Sobre</a></li>
                                  <li><a href="./pages/gallery.html">Galeria</a></li>
                                  <li><a href="https://github.com/EudisAlves">GitHub</a></li>
                                  <li><a href="https://www.linkedin.com/in/eudis-alves-342744179">Linkedin</a></li>
                              </ul>
                          }
                      </Drawer>
                    </React.Fragment> 
                </header>  
            </>
          ))}
        </div>
    );
};

