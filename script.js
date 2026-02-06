const toggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Toggle theme on click
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');

  // Switch icon
  if (isDark) {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  }

  // Save preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ============================================================================
// PROJECT IMAGE VIEWER MODAL
// ============================================================================
// This handles the project image gallery modal with next/previous navigation

/**
 * Project Image Data Structure
 * Each project has an array of image objects with src and label
 * Image objects: { src: 'path/to/image.png', label: 'Description' }
 * 
 * To add images to a project:
 * 1. Add a new image object with src and label properties
 * 2. Update the project card's data-project attribute to match the key
 */
const projectImages = {
  iLocate: [
    { src: 'images/projects/iLocate/login_form.jpg', label: 'Login Form' },
    { src: 'images/projects/iLocate/rescuer_home.jpg', label: 'Rescuer Dashboard' },
    { src: 'images/projects/iLocate/rescuer_sosAlerts.jpg', label: 'Rescuer Dashboard' },
    { src: 'images/projects/iLocate/rescuer_details.jpg', label: 'Rescuer Dashboard' },
    { src: 'images/projects/iLocate/rescuer_detailsToggled.jpg', label: 'Rescuer Dashboard' },
    { src: 'images/projects/iLocate/rescuer_incidentConfirm.jpg', label: 'Rescuer Dashboard' },
    { src: 'images/projects/iLocate/rescuer_teamMembers.jpg', label: 'Rescuer Dashboard' },
    { src: 'images/projects/iLocate/rescuer_incidentLogs.jpg', label: 'Rescuer Dashboard' },
    { src: 'images/projects/iLocate/rescuer_settingsProfile.jpg', label: 'Rescuer Dashboard' },
    { src: 'images/projects/iLocate/rescuer_foreNotif.jpg', label: 'Rescuer Dashboard' },
    { src: 'images/projects/iLocate/rescuer_backNotif.jpg', label: 'Rescuer Dashboard' },
    { src: 'images/projects/iLocate/admin_home.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/iLocate/admin_sosAlerts.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/iLocate/admin_incidentDetails.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/iLocate/admin_assign.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/iLocate/admin_assign2.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/iLocate/admin_assign3.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/iLocate/admin_manageTeams.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/iLocate/admin_manageTeams2.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/iLocate/admin_incidentLogs.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/iLocate/admin_settingsProfile.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/iLocate/admin_addAdmin.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/iLocate/admin_addDevices.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/iLocate/admin_foreNotif.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/iLocate/admin_backNotif.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/iLocate/changePass_form.jpg', label: 'Change Password Form' },
    { src: 'images/projects/iLocate/forgotPass_form.jpg', label: 'Forgot Password Form' },
    { src: 'images/projects/iLocate/email_verification.jpg', label: 'Email Verification' },
  
  ],
  lostandfound: [
    { src: 'images/projects/lost_found/signup_form.jpg', label: 'Signup Form' },
    { src: 'images/projects/lost_found/login_form.png', label: 'Login Form' },
    { src: 'images/projects/lost_found/user_home.jpg', label: 'User Dashboard' },
    { src: 'images/projects/lost_found/user_search.jpg', label: 'User Dashboard' },
    { src: 'images/projects/lost_found/user_report1.jpg', label: 'User Dashboard' },
    { src: 'images/projects/lost_found/user_report2.jpg', label: 'User Dashboard' },
    { src: 'images/projects/lost_found/user_found.jpg', label: 'User Dashboard' },
    { src: 'images/projects/lost_found/user_itemdetails.jpg', label: 'User Dashboard' },
    { src: 'images/projects/lost_found/user_profile.jpg', label: 'User Dashboard' },
    { src: 'images/projects/lost_found/user_policy.jpg', label: 'User Dashboard' },
    { src: 'images/projects/lost_found/user_helpSupport.jpg', label: 'User Dashboard' },
    { src: 'images/projects/lost_found/admin_dashboard.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/lost_found/admin_userLists.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/lost_found/admin_userProfile.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/lost_found/admin_lostItems.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/lost_found/admin_itemDetails.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/lost_found/admin_found.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/lost_found/admin_itemFound.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/lost_found/admin_archivedUsers.jpg', label: 'Admin Dashboard' },
    { src: 'images/projects/lost_found/admin_restore.jpg', label: 'Admin Dashboard' },
    
  ],
  sunrise: [
    { src: 'images/projects/sunrise/user_home.png', label: 'User Dashboard' },
    { src: 'images/projects/sunrise/user_home2.png', label: 'User Dashboard' },
    { src: 'images/projects/sunrise/user_home3.png', label: 'User Dashboard' },
    { src: 'images/projects/sunrise/user_home4.png', label: 'User Dashboard' },
    { src: 'images/projects/sunrise/user_rooms.png', label: 'User Dashboard' },
    { src: 'images/projects/sunrise/user_rooms2.png', label: 'User Dashboard' },
    { src: 'images/projects/sunrise/user_rooms3.png', label: 'User Dashboard' },
    { src: 'images/projects/sunrise/user_rooms4.png', label: 'User Dashboard' },
    { src: 'images/projects/sunrise/user_gallery.png', label: 'User Dashboard' },
    { src: 'images/projects/sunrise/user_features.png', label: 'User Dashboard' },
    { src: 'images/projects/sunrise/user_about.png', label: 'User Dashboard' },
    { src: 'images/projects/sunrise/user_about2.png', label: 'User Dashboard' },
    { src: 'images/projects/sunrise/user_contact.png', label: 'User Dashboard' },
    { src: 'images/projects/sunrise/gmail_receipt.png', label: 'Gmail Receipt' },
    { src: 'images/projects/sunrise/admin_login.png', label: 'Admin Login' },
    { src: 'images/projects/sunrise/admin_home.png', label: 'Admin Dashboard' },
    { src: 'images/projects/sunrise/admin_1.png', label: 'Admin Dashboard' },
    { src: 'images/projects/sunrise/admin_2.png', label: 'Admin Dashboard' },
    { src: 'images/projects/sunrise/admin_3.png', label: 'Admin Dashboard' },
    { src: 'images/projects/sunrise/admin_4.png', label: 'Admin Dashboard' },
    { src: 'images/projects/sunrise/admin_5.png', label: 'Admin Dashboard' },
    { src: 'images/projects/sunrise/admin_6.png', label: 'Admin Dashboard' },
    { src: 'images/projects/sunrise/admin_7.png', label: 'Admin Dashboard' },
    
  ]
};


// Manages the modal state and navigation between project images
class ProjectImageViewer {
  constructor() {
    this.currentProject = null;
    this.currentImageIndex = 0;
    this.images = [];
    
    // DOM Elements
    this.modal = document.getElementById('projectImageModal');
    this.imageElement = document.getElementById('projectModalImage');
    this.prevBtn = document.getElementById('projectPrevBtn');
    this.nextBtn = document.getElementById('projectNextBtn');
    this.counter = document.getElementById('imageCounter');
    
    // Initialize event listeners
    this.initEventListeners();
  }

  initEventListeners() {
    // Modal open event - loads the correct project images
    this.modal.addEventListener('show.bs.modal', (event) => {
      const trigger = event.relatedTarget;
      const projectName = trigger.getAttribute('data-project');
      this.loadProject(projectName);
    });

    // Modal close event - reset state
    this.modal.addEventListener('hidden.bs.modal', () => {
      this.reset();
    });

    // Navigation buttons
    this.prevBtn.addEventListener('click', () => this.previousImage());
    this.nextBtn.addEventListener('click', () => this.nextImage());

    // Keyboard navigation (optional but nice UX)
    document.addEventListener('keydown', (e) => {
      if (this.modal && this.modal.classList.contains('show')) {
        if (e.key === 'ArrowLeft') this.previousImage();
        if (e.key === 'ArrowRight') this.nextImage();
      }
    });
  }

  // Load images for a specific project
  // projectName = key in projectImages object

  loadProject(projectName) {
    if (!projectImages[projectName]) {
      console.warn(`Project "${projectName}" not found in projectImages`);
      return;
    }

    this.currentProject = projectName;
    this.images = projectImages[projectName];
    this.currentImageIndex = 0;
    this.displayImage();
  }

  // Display the current image and update UI
  displayImage() {
    if (this.images.length === 0) return;

    const currentImageData = this.images[this.currentImageIndex];

    // Set image source with fade animation
    this.imageElement.classList.remove('project-modal-fade-in');
    
    // Trigger reflow to restart animation
    void this.imageElement.offsetWidth;
    
    // Set the image source and alt text
    this.imageElement.src = currentImageData.src;
    this.imageElement.alt = currentImageData.label;
    this.imageElement.classList.add('project-modal-fade-in');

    // Update the image label overlay
    this.updateImageLabel(currentImageData.label);

    // Update counter
    this.updateCounter();
    
    // Update button states
    this.updateButtonStates();
  }
  // Update the image label overlay
  updateImageLabel(label) {
    const labelElement = document.getElementById('projectModalImageLabel');
    if (labelElement) {
      labelElement.textContent = label;
    }
  }

  // Display next image
  nextImage() {
    if (this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
      this.displayImage();
    }
  }

  // Display previous image
  previousImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
      this.displayImage();
    }
  }

  // Update the image counter display
  updateCounter() {
    const total = this.images.length;
    const current = this.currentImageIndex + 1;
    this.counter.textContent = `${current} / ${total}`;
  }

  updateButtonStates() {
    // Disable Previous if on first image
    this.prevBtn.disabled = this.currentImageIndex === 0;
    
    // Disable Next if on last image
    this.nextBtn.disabled = this.currentImageIndex === this.images.length - 1;
  }

  
  // Reset viewer state when modal closes
  reset() {
    this.currentProject = null;
    this.currentImageIndex = 0;
    this.images = [];
  }
}

// Initialize the project image viewer when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ProjectImageViewer();
});
