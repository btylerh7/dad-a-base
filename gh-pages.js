import ghpages from 'gh-pages';

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/btylerh7/dad-a-base.git', // Update to point to your repository  
        user: {
            name: 'btylerh7', // update to use your name
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)