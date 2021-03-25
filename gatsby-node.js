module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === MarkDownRemark) {
    console.log(JSON.stringify(node, undefined, 4));
  }
};
