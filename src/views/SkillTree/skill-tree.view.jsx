import { TreeGraph } from '@components';
import { Container } from '@mui/material';
const treeData = [
  {
    id: '1',
    label: 'Parent Node',
    children: [
      { id: '2', label: 'Child Node 1' },
      {
        id: '3',
        label: 'Child Node 2',
        children: [
          { id: '4', label: 'Sub-Child Node 1' },
          { id: '5', label: 'Sub-Child Node 2' },
        ],
      },
    ],
  },
];

const SkillTree = () => (
  <Container sx={{ mt: 15 }}>
    <TreeGraph treeData={treeData} />
  </Container>
);

export default SkillTree;
