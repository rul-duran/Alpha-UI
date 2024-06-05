import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, IconButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const TreeNode = ({ node }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={node.label} />
        {node.children && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {node.children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {node.children.map((childNode) => (
              <TreeNode key={childNode.id} node={childNode} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

const TreeGraph = ({ treeData }) => {
  return (
    <List>
      {treeData.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </List>
  );
};

export default TreeGraph;
