document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab-item');
  const blogPosts = document.querySelectorAll('.blog-post');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      tab.classList.add('active');

      const category = tab.dataset.category;
      
      // Show/hide blog posts based on category
      blogPosts.forEach(post => {
        if (category === 'all' || post.dataset.category === category) {
          post.style.display = 'block';
        } else {
          post.style.display = 'none';
        }
      });
    });
  });
}); 