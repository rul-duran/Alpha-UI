import './styles.css';

const TreeGraph = ({ data }) => {
  return (
    <div class="tree">
      <ul>
        <li>
          <a href="#">Parent</a>
          <ul id="parent_root">
            <li>
              <a href="#">Child</a>
              <ul>
                <li>
                  <a href="#">Grand Child</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Child</a>
              <ul>
                <li>
                  <a href="#">Grand Child</a>
                </li>
                <li>
                  <a href="#">Grand Child</a>
                  <ul>
                    <li>
                      <a href="#">Great Grand Child</a>
                    </li>
                    <li>
                      <a href="#">Great Grand Child</a>
                    </li>
                    <li>
                      <a href="#">Great Grand Child</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Grand Child</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default TreeGraph;
