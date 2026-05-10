import React, { useState, useEffect, useRef } from 'react';
import img from '../assets/img/logo.png';

const Header = ({ cartItems, onCartClick, onAddToCart, menuItems }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);

  // Sections to track
  const sectionIds = ['hero', 'menu', 'events', 'testimonials', 'about', 'whyChooseUs', 'contact'];

  // Flatten all menu items for searching - memoized to prevent recreating on every render
  const allMenuItems = React.useMemo(() => {
    if (!menuItems || !Array.isArray(menuItems)) {
      return [];
    }
    
    try {
      return menuItems.flatMap(category => {
        if (!category || !category.items || !Array.isArray(category.items)) {
          return [];
        }
        
        return category.items.map(item => ({
          ...item,
          category: category.category || 'Unknown'
        }));
      });
    } catch (error) {
      console.error('Error flattening menu items:', error);
      return [];
    }
  }, [menuItems]);

  useEffect(() => {
    const navToggle = document.querySelector('.mobile-nav-toggle');

    const toggleMenu = () => {
      setMobileMenuOpen((prev) => !prev);
      document.body.classList.toggle('mobile-nav-active');
    };

    if (navToggle) {
      navToggle.addEventListener('click', toggleMenu);
    }

    return () => {
      if (navToggle) {
        navToggle.removeEventListener('click', toggleMenu);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = 'hero';

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 100) {
            currentSection = id;
          }
        }
      }

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle search expansion
  useEffect(() => {
    if (searchExpanded && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchExpanded]);

  // Handle click outside to close search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setSearchExpanded(false);
        setSearchQuery('');
        setFilteredItems([]);
      }
    };

    if (searchExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchExpanded]);

  // Filter menu items based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredItems([]);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    
    const filtered = allMenuItems.filter(item => {
      const title = (item.title || '').toLowerCase();
      const ingredients = (item.ingredients || '').toLowerCase();
      const category = (item.category || '').toLowerCase();
      const price = (item.price || '').toLowerCase();
      
      return title.includes(query) || 
             ingredients.includes(query) || 
             category.includes(query) || 
             price.includes(query);
    });
    
    setFilteredItems(filtered.slice(0, 8)); // Limit to 8 results
  }, [searchQuery]); // Only searchQuery dependency to avoid infinite loops

  const handleSearchClick = () => {
    setSearchExpanded(true);
  };

  const handleSearchClose = () => {
    setSearchExpanded(false);
    setSearchQuery('');
    setFilteredItems([]);
  };

  const handleAddToCartFromSearch = (item) => {
    if (onAddToCart) {
      onAddToCart(item);
    }
  };

  const totalCartItems = cartItems?.reduce((sum, item) => sum + (item.quantity || 0), 0) || 0;

  return (
    <>
      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a href="#hero" className="logo d-flex align-items-center me-auto me-xl-0">
            <img src={img} alt="PF Grill Logo" className="logo-img" />
          </a>

          <nav id="navmenu" className={`navmenu ${mobileMenuOpen ? 'show' : ''}`}>
            <ul>
              <li>
                <a href="#hero" className={activeLink === 'hero' ? 'active' : ''}>
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className={activeLink === 'menu' ? 'active' : ''}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#events" className={activeLink === 'events' ? 'active' : ''}>
                  Events
                </a>
              </li>
              <li>
                <a href="#testimonials" className={activeLink === 'testimonials' ? 'active' : ''}>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#about" className={activeLink === 'about' ? 'active' : ''}>
                  About
                </a>
              </li>
              <li>
                <a href="#whyChooseUs" className={activeLink === 'whyChooseUs' ? 'active' : ''}>
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className={activeLink === 'contact' ? 'active' : ''}>
                  Contact
                </a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <div className="d-flex align-items-center gap-3">
            {/* Search Container */}
            <div 
              ref={searchContainerRef}
              className="search-container"
              style={{ position: 'relative', zIndex: 100 }}
            >
              {!searchExpanded ? (
                <button 
                  onClick={handleSearchClick}
                  className="search-icon-btn"
                  aria-label="Open search"
                  style={{
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    padding: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <i 
                    className="bi bi-search" 
                    style={{ 
                      fontSize: '1.5rem', 
                      color: '#333',
                      display: 'block'
                    }}
                  ></i>
                </button>
              ) : (
                <div className="search-expanded">
                  <div className="search-input-wrapper">
                    <i className="bi bi-search search-input-icon"></i>
                    <input
                      ref={searchInputRef}
                      type="text"
                      className="form-control search-input"
                      placeholder="Search menu items..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button 
                      onClick={handleSearchClose}
                      className="btn btn-link search-close-btn p-0"
                      aria-label="Close search"
                    >
                      <i className="bi bi-x-lg"></i>
                    </button>
                  </div>

                  {/* Search Results Dropdown */}
                  {searchQuery && filteredItems.length > 0 && (
                    <div className="search-results">
                      {filteredItems.map((item, index) => (
                        <div key={`${item.title}-${index}`} className="search-result-item">
                          <div className="search-result-content">
                            {item.image && (
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="search-result-image"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                }}
                              />
                            )}
                            <div className="search-result-details">
                              <h6 className="search-result-title">{item.title}</h6>
                              <p className="search-result-category">{item.category}</p>
                              <p className="search-result-price">{item.price}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleAddToCartFromSearch(item)}
                            className="btn btn-sm btn-primary search-add-btn"
                            disabled={item.title === 'Plain Rice' || item.category === 'Pizza (COMING SOON)'}
                          >
                            {item.title === 'Plain Rice' ? 'Free' : 
                             item.category === 'Pizza (COMING SOON)' ? 'Soon' : 
                             'Add'}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* No results found */}
                  {searchQuery && filteredItems.length === 0 && (
                    <div className="search-results">
                      <div className="search-no-results">
                        <i className="bi bi-search"></i>
                        <p>No items found for "{searchQuery}"</p>
                        <small style={{ color: '#999', marginTop: '8px', display: 'block' }}>
                          Try: Chicken, Biryani, Naan, Paneer
                        </small>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Cart Button */}
            <button 
              onClick={onCartClick} 
              className="btn position-relative cart-btn"
              style={{
                background: 'transparent',
                border: 'none',
                padding: '5px'
              }}
            >
              <i className="bi bi-cart" style={{ fontSize: '1.5rem', color: '#333' }}></i>
              {totalCartItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalCartItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Styles */}
      <style>{`
        .search-container {
          position: relative;
          transition: all 0.3s ease;
        }

        .search-icon-btn:hover i {
          color: #ce1212 !important;
        }

        .search-expanded {
          position: absolute;
          right: 0;
          top: -8px;
          z-index: 1000;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          min-width: 320px;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          padding: 10px 15px;
          border-bottom: 1px solid #e0e0e0;
        }

        .search-input-icon {
          color: #666;
          margin-right: 10px;
          font-size: 1.1rem;
        }

        .search-input {
          border: none !important;
          outline: none !important;
          flex: 1;
          padding: 6px 10px;
          font-size: 14px;
          box-shadow: none !important;
        }

        .search-close-btn {
          border: none;
          background: none;
          color: #666;
          cursor: pointer;
          padding: 0 4px;
          margin-left: 8px;
          font-size: 1.2rem;
        }

        .search-close-btn:hover {
          color: #ce1212;
        }

        .search-results {
          max-height: 450px;
          overflow-y: auto;
          padding: 10px;
        }

        .search-result-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 8px;
          background: #f8f9fa;
          transition: all 0.2s ease;
        }

        .search-result-item:hover {
          transform: translateX(4px);
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .search-result-content {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
        }

        .search-result-image {
          width: 55px;
          height: 55px;
          object-fit: cover;
          border-radius: 8px;
          border: 2px solid #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .search-result-details {
          flex: 1;
        }

        .search-result-title {
          font-size: 14px;
          font-weight: 600;
          margin: 0 0 4px 0;
          color: #333;
        }

        .search-result-category {
          font-size: 12px;
          color: #666;
          margin: 0 0 4px 0;
        }

        .search-result-price {
          font-size: 14px;
          font-weight: 700;
          color: #ce1212;
          margin: 0;
        }

        .search-add-btn {
          white-space: nowrap;
          min-width: 65px;
          font-size: 13px;
          font-weight: 600;
        }

        .search-no-results {
          text-align: center;
          padding: 50px 20px;
          color: #666;
        }

        .search-no-results i {
          font-size: 56px;
          color: #ddd;
          margin-bottom: 16px;
          display: block;
        }

        .search-no-results p {
          margin: 0;
          font-size: 15px;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .search-expanded {
            position: fixed;
            top: 80px;
            left: 10px;
            right: 10px;
            min-width: auto;
            max-width: calc(100vw - 20px);
            border-radius: 12px;
          }

          .search-results {
            max-height: calc(100vh - 180px);
          }

          .search-result-item {
            padding: 10px;
          }

          .search-result-image {
            width: 45px;
            height: 45px;
          }

          .search-result-title {
            font-size: 13px;
          }

          .search-result-category,
          .search-result-price {
            font-size: 11px;
          }

          .search-add-btn {
            font-size: 12px;
            min-width: 55px;
            padding: 5px 10px;
          }
        }

        @media (max-width: 480px) {
          .search-input-wrapper {
            padding: 8px 12px;
          }

          .search-input {
            font-size: 13px;
          }

          .gap-3 {
            gap: 0.75rem !important;
          }
        }

        /* Scrollbar styling */
        .search-results::-webkit-scrollbar {
          width: 7px;
        }

        .search-results::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }

        .search-results::-webkit-scrollbar-thumb {
          background: #999;
          border-radius: 4px;
        }

        .search-results::-webkit-scrollbar-thumb:hover {
          background: #666;
        }

        /* Cart button hover */
        .cart-btn:hover i {
          color: #ce1212 !important;
        }
      `}</style>
    </>
  );
};

export default Header;