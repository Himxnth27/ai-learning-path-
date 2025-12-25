document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('generator-form');
    const heroSection = document.getElementById('hero');
    const dashboardSection = document.getElementById('dashboard');
    const timelineContainer = document.getElementById('timeline-container');
    const loadingElement = document.getElementById('loading');
    const userGreeting = document.getElementById('user-greeting');
    const resetBtn = document.getElementById('reset-btn');

    // Mock Data for "AI" Generation
    const courseDatabase = {
        'web-development': [
            { title: 'HTML5 Basics', desc: 'Structure of the web in 10 minutes.', tag: 'Fundamentals', link: 'https://www.youtube.com/watch?v=itQnqd7qSjg' }, // Web Dev Simplified (HTML)
            { title: 'CSS3 Crash Course', desc: 'Style your site fast.', tag: 'Styling', link: 'https://www.youtube.com/watch?v=1PnVor36_40' }, // Web Dev Simplified (CSS)
            { title: 'JavaScript in 100 Seconds', desc: 'The basics of logic quickly.', tag: 'Logic', link: 'https://www.youtube.com/watch?v=DHvZLI7Db8E' }, // Fireship JS
            { title: 'React.js Basics', desc: 'Components & State explained simply.', tag: 'Frameworks', link: 'https://www.youtube.com/watch?v=hQAHSlTtcmY' }, // Web Dev Simplified React
            { title: 'Node.js in 100 Seconds', desc: 'Backend runtime overview.', tag: 'Backend', link: 'https://www.youtube.com/watch?v=ENrzD9HAZK4' }, // Fireship Node
            { title: 'SQL vs NoSQL', desc: 'Choosing the right DB quickly.', tag: 'Data', link: 'https://www.youtube.com/watch?v=ZS_kXvOeQ5Y' } // Fireship DB
        ],
        'dsa': [
            // Focused on CS Dojo & NeetCode for "Easy & Less Time Consuming"
            { title: 'Step 1: Big O Notation', desc: 'Complexity explained easily.', tag: 'Foundations', link: 'https://www.youtube.com/watch?v=D6xkbGLQesk' }, // Abdul Bari (Best intro, even if slightly long, it's the standard)
            { title: 'Step 2: Arrays & Strings', desc: 'Introduction to data storage.', tag: 'Data Structures', link: 'https://www.youtube.com/watch?v=pmN9ExPofCY' }, // CS Dojo
            { title: 'Step 3: Linked Lists', desc: 'Nodes and pointers visualized.', tag: 'DS', link: 'https://www.youtube.com/watch?v=WwfhLC16bis' }, // CS Dojo
            { title: 'Step 4: Stacks & Queues', desc: 'LIFO and FIFO principles.', tag: 'DS', link: 'https://www.youtube.com/watch?v=F1F2imiOJfk' }, // CS Dojo
            { title: 'Step 5: Recursion', desc: 'Functions calling themselves.', tag: 'Logic', link: 'https://www.youtube.com/watch?v=IJDJ0kBx2LM' }, // CS Dojo
            { title: 'Step 6: Binary Search', desc: 'Finding items instantly.', tag: 'Algorithms', link: 'https://www.youtube.com/watch?v=P3YID7liBug' }, // CS Dojo
            { title: 'Step 7: Hash Maps', desc: 'Key-value pairs explained.', tag: 'DS', link: 'https://www.youtube.com/watch?v=shs0KM3wKv8' }, // CS Dojo
            { title: 'Step 8: Trees & BST', desc: 'Hierarchical data structures.', tag: 'Trees', link: 'https://www.youtube.com/watch?v=sf_9w653vrE' }, // CS Dojo
            { title: 'Step 9: Graphs Basics', desc: 'Nodes and edges network.', tag: 'Advanced', link: 'https://www.youtube.com/watch?v=gXgEDyodOJU' }, // CS Dojo
            { title: 'Step 10: Dynamic Programming', desc: 'Optimizing solutions (Intro).', tag: 'Advanced', link: 'https://www.youtube.com/watch?v=vYquumk4nWw' } // CS Dojo
        ],
        'artificial-intelligence': [
            { title: 'AI in 100 Seconds', desc: 'Quick overview of the field.', tag: 'Overview', link: 'https://www.youtube.com/watch?v=2ePf9rue1Ao' }, // Fireship
            { title: 'Python in 100 Seconds', desc: 'The language of AI.', tag: 'Language', link: 'https://www.youtube.com/watch?v=x7X9w_GIm1s' }, // Fireship
            { title: 'Machine Learning Basics', desc: 'ML concepts simplified.', tag: 'ML', link: 'https://www.youtube.com/watch?v=ukzFI9rgwfU' }, // Simplilearn (Good visual intro)
            { title: 'Neural Networks (Intro)', desc: 'How deep learning works.', tag: 'Deep Learning', link: 'https://www.youtube.com/watch?v=bfmFfD2RIcg' }, // Simple explanation
            { title: 'NLP Explained', desc: 'Computers understanding text.', tag: 'Advanced', link: 'https://www.youtube.com/watch?v=CMrHM8a3hqw' } // Simplilearn NLP
        ],
        'data-science': [
            { title: 'Data Science in 5 Minutes', desc: 'What is Data Science?', tag: 'Overview', link: 'https://www.youtube.com/watch?v=X3paOmcrTjQ' }, // Simplilearn
            { title: 'Pandas & NumPy', desc: 'Python data tools intro.', tag: 'Tools', link: 'https://www.youtube.com/watch?v=dcqPhpY7tWk' },
            { title: 'Data Visualization', desc: 'Charts and graphs intro.', tag: 'Analysis', link: 'https://www.youtube.com/watch?v=O5on0a395_4' },
            { title: 'Statistics for DS', desc: 'Key concepts quickly.', tag: 'Math', link: 'https://www.youtube.com/watch?v=Vfo5le26IhY' }
        ],
        // Default fallback
        'default': [
            { title: 'Coding Basics', desc: 'Start here.', tag: 'Core', link: 'https://www.youtube.com/watch?v=zOjov-2OZ0E' },
            { title: 'Algorithms Intro', desc: 'How computers think.', tag: 'CS', link: 'https://www.youtube.com/watch?v=kPRA0W1kECg' }
        ]
    };

    // GSAP
    gsap.registerPlugin(SplitText);
    const subtitle = new SplitText('.hero-subtitle', { type: 'words' });
    
    gsap.timeline()
    .from('.hero-title', {
        y: 200,
        autoAlpha: 0,
        duration: 1,
        stagger: { each: 0.05 },
        ease: "power2"
    })
    .from(subtitle.words, {
        y: 200,
        autoAlpha: 0,
        stagger: 0.05,
        ease: "power2"
    })
    .from('.form-group', {
        xPercent: -200,
        stagger: 0.05,
        ease: 'sine.inOut'
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const focusArea = document.getElementById('focus-area').value;
        const experience = document.getElementById('experience').value;

        // Transition UI
        heroSection.style.display = 'none';
        dashboardSection.classList.remove('hidden');
        loadingElement.classList.remove('hidden');
        timelineContainer.innerHTML = ''; // Clear previous

        userGreeting.textContent = `Hello, ${username}. Generating your custom ${experience} path for ${focusArea.replace('-', ' ')}...`;

        // Simulate AI Processing Delay
        setTimeout(() => {
            loadingElement.style.display = 'none';
            generatePath(focusArea, experience);
        }, 3000);
    });

    resetBtn.addEventListener('click', () => {
        dashboardSection.classList.add('hidden');
        heroSection.style.display = 'flex';
        loadingElement.style.display = '';
        form.reset();
    });

    function generatePath(area, level) {
        let courses = courseDatabase[area] || courseDatabase['default'];

        // Simple "AI" customization based on level
        if (level === 'intermediate') {
            courses = courses.slice(2); // Skip basics
        } else if (level === 'advanced') {
            courses = courses.slice(4); // Only advanced
        }

        if (courses.length === 0) {
            courses = [
                { title: 'Mastery Level Achieved', desc: 'You are ready for specialized research or contributing to open source!', tag: 'Expert', link: 'https://github.com/explore' }
            ];
        }

        courses.forEach((course, index) => {
            const item = document.createElement('div');
            item.className = 'timeline-item';

            // Stagger animation delay
            item.style.animationDelay = `${index * 0.2}s`;

            item.innerHTML = `
                <div class="card">
                    <h3>${course.title}</h3>
                    <p>${course.desc}</p>
                    <div class="card-footer">
                        <span class="tag">${course.tag}</span>
                        <a href="${course.link}" target="_blank" class="btn-link">Watch Tutorial <span class="arrow">→</span></a>
                    </div>
                </div>
            `;
            timelineContainer.appendChild(item);
        });
    }
});
