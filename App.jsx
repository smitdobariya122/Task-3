import React, { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import './App.css';

function App() {
  const [likes, setLikes] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  const handleCardSelect = (cardName) => {
    setSelectedCard(cardName);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎨 UI Component Library</h1>
        <p>Modern & Reusable React Components for Your Projects</p>
        <div className="header-stats">
          <span>✨ 2 Components</span>
          <span>🚀 Production Ready</span>
          <span>📱 Fully Responsive</span>
        </div>
      </header>

      <main className="app-main">
        {/* Button Showcase */}
        <section className="demo-section">
          <h2>🎯 Button Component Showcase</h2>
          <p className="section-description">
            Explore different button styles and sizes. All buttons are fully customizable and accessible.
          </p>
          
          <div className="button-showcase">
            <div className="button-category">
              <h3>Style Variants</h3>
              <div className="button-group">
                <Button variant="primary" onClick={handleLike}>
                  👍 Like ({likes})
                </Button>
                <Button variant="secondary" onClick={handleLike}>
                  ⭐ Favorite
                </Button>
                <Button variant="outline" onClick={handleLike}>
                  📤 Share
                </Button>
                <Button variant="danger" onClick={handleLike}>
                  🗑️ Delete
                </Button>
              </div>
            </div>

            <div className="button-category">
              <h3>Size Options</h3>
              <div className="button-group">
                <Button size="small" variant="primary">
                  Small
                </Button>
                <Button size="medium" variant="primary">
                  Medium
                </Button>
                <Button size="large" variant="primary">
                  Large
                </Button>
              </div>
            </div>

            <div className="button-category">
              <h3>Special States</h3>
              <div className="button-group">
                <Button variant="primary" disabled>
                  🔒 Disabled
                </Button>
                <Button variant="primary" type="submit">
                  ✅ Submit Form
                </Button>
                <Button variant="outline" type="reset">
                  🔄 Reset
                </Button>
              </div>
            </div>
          </div>

          <div className="interaction-info">
            <p>💡 <strong>Tip:</strong> Click any button to see interactions. Total interactions: <strong>{likes}</strong></p>
          </div>
        </section>

        {/* Card Showcase */}
        <section className="demo-section">
          <h2>📦 Card Component Gallery</h2>
          <p className="section-description">
            Discover various card layouts and use cases. Perfect for displaying content, products, or information.
          </p>
          
          <div className="card-grid">
            <Card
              title="📚 Product Card"
              subtitle="E-commerce Item Display"
              hoverable={true}
              footer={
                <>
                  <Button variant="outline" size="small">View Details</Button>
                  <Button variant="primary" size="small" onClick={handleLike}>Add to Cart</Button>
                </>
              }
            >
              <div className="product-info">
                <div className="product-price">$49.99</div>
                <p>Premium quality product with excellent features. Perfect for everyday use.</p>
                <div className="product-rating">⭐⭐⭐⭐⭐ (4.8/5)</div>
              </div>
            </Card>

            <Card
              title="👤 User Profile"
              subtitle="Social Media Card"
              hoverable={true}
            >
              <div className="profile-info">
                <div className="avatar">👨‍💻</div>
                <h4>Smit Dobariya</h4>
                <p>Website Developer</p>
                <div className="profile-stats">
                  <span>📝 120 Posts</span>
                  <span>👥 1.2K Followers</span>
                </div>
                <Button variant="primary" size="small" style={{width: '100%', marginTop: '10px'}}>
                  Follow
                </Button>
              </div>
            </Card>

            <Card
              title="📊 Statistics Card"
              subtitle="Analytics Dashboard"
              shadow={true}
            >
              <div className="stats-content">
                <div className="stat-item">
                  <div className="stat-value">1,234</div>
                  <div className="stat-label">Total Views</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">567</div>
                  <div className="stat-label">Active Users</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">89%</div>
                  <div className="stat-label">Engagement</div>
                </div>
              </div>
            </Card>

            <Card
              title="📝 Blog Post Preview"
              subtitle="Content Management"
              hoverable={true}
              footer={
                <Button variant="outline" size="small">Read More →</Button>
              }
            >
              <p><strong>Getting Started with React Components</strong></p>
              <p>Learn how to build reusable UI components using functional components and props. This guide covers everything you need...</p>
              <div className="blog-meta">
                <span>📅 Jan 15, 2024</span>
                <span>⏱️ 5 min read</span>
              </div>
            </Card>

            <Card
              title="🎯 Feature Card"
              subtitle="Highlight Important Features"
              shadow={false}
            >
              <div className="feature-list">
                <div className="feature-item">✅ Fast Performance</div>
                <div className="feature-item">✅ Easy to Customize</div>
                <div className="feature-item">✅ Mobile Friendly</div>
                <div className="feature-item">✅ Accessible Design</div>
                <div className="feature-item">✅ Cross-Browser Support</div>
              </div>
            </Card>

            <Card
              title="🎨 Design System"
              subtitle="Component Library"
              hoverable={true}
              footer={
                <Button variant="primary" size="small" onClick={handleLike}>
                  Explore Library
                </Button>
              }
            >
              <p>Our component library includes:</p>
              <ul style={{paddingLeft: '20px', lineHeight: '1.8'}}>
                <li>🎯 Button Components</li>
                <li>📦 Card Components</li>
                <li>📋 Form Elements</li>
                <li>🎭 Modal Dialogs</li>
                <li>📊 Data Tables</li>
              </ul>
            </Card>

            <Card
              title="🔔 Notification Card"
              subtitle="Alert System"
            >
              <div className="notification-content">
                <div className="notification-icon">🔔</div>
                <p><strong>New Message Received</strong></p>
                <p>You have 3 unread messages from your team members.</p>
                <Button variant="primary" size="small" style={{width: '100%', marginTop: '15px'}}>
                  View Messages
                </Button>
              </div>
            </Card>

            <Card
              title="💰 Pricing Card"
              subtitle="Subscription Plans"
              hoverable={true}
              footer={
                <Button variant="primary" size="small" style={{width: '100%'}}>
                  Choose Plan
                </Button>
              }
            >
              <div className="pricing-content">
                <div className="pricing-amount">$29<span>/month</span></div>
                <div className="pricing-features">
                  <p>✓ Unlimited Projects</p>
                  <p>✓ Premium Support</p>
                  <p>✓ Advanced Analytics</p>
                  <p>✓ API Access</p>
                </div>
              </div>
            </Card>
          </div>

          {selectedCard && (
            <div className="selection-info">
              <p>✅ Selected: <strong>{selectedCard}</strong></p>
            </div>
          )}
        </section>

        {/* Usage Examples */}
        <section className="demo-section">
          <h2>💻 Code Examples</h2>
          <div className="code-examples">
            <Card title="Button Usage" shadow={false}>
              <pre className="code-block">
{`<Button 
  variant="primary" 
  size="medium"
  onClick={handleClick}
>
  Click Me
</Button>`}
              </pre>
            </Card>
            <Card title="Card Usage" shadow={false}>
              <pre className="code-block">
{`<Card
  title="Card Title"
  subtitle="Card Subtitle"
  hoverable={true}
  footer={<Button>Action</Button>}
>
  <p>Card content here</p>
</Card>`}
              </pre>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
