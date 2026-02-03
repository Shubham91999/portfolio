export function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const targetId = href.replace('#', '');
  const element = document.getElementById(targetId);
  
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    
    // Update URL without page jump
    window.history.pushState(null, '', href);
  }
} 