
            // Scroll to Top Functionality
            document.querySelector('.foot-panel1').addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        
            // Display Alert on Hero Section Link Click
            document.querySelector('.hero-msg a').addEventListener('click', (event) => {
                event.preventDefault();
                alert('Redirecting to Amazon India...');
            });
        
            // Simulate Search
            document.querySelector('.search-icon').addEventListener('click', () => {
                const query = document.querySelector('.search-input').value;
                if (query) {
                    alert(`Searching for: ${query}`);
                } else {
                    alert('Please enter a search query.');
                }
            });