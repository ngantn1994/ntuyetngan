<template>
  <div :class="{'home-content': true,
    'section-background-brick': currentSection === 1,
    'section-background-jigsaw': currentSection === 2,
    'section-background-circuit': currentSection === 3,
    'section-background-cloud': currentSection === 4,
    }" @scroll="handleScroll()">

    <div :class="{ 'introduction-section': true, 'section-container': true,
      'hidden': scrollValue > 500 }">
      <div class="left-container">
        <div id="portrait-move-box" class="portrait-move-box">
          <div class="portrait-box">
            <img alt="My portrait" src="../assets/portrait.jpg">
          </div>
        </div>
      </div>
      <div class="right-container">
        <div id="name-move-box" class="name-move-box">
          <div class="name-box" v-html="texts.introName"></div>
          <div class="job-title-box" v-html="texts.introTitle"></div>
        </div>
      </div>
    </div>

    <div :class="{ 'section-container': true, 'hidden-on-mobile': true,
      'hidden': scrollValue <= 200 || scrollValue >= 1000 }">
      <div class="top-right-container">
        <div id="education-move-box" class="education-move-box">
          <FancyTitle :text="texts.education" class="education-title hidden-on-smaller-screen"/>
          <div class="big-title education-smaller-title
            show-on-smaller-screen" v-html="texts.education"></div>
          <div class="education-box">
            <div v-html="texts.educationInfo"></div><br>
            <div v-html="texts.educationRef"></div>
          </div>
        </div>
      </div>
      <div class="large-left-container">
        <div id="experience-move-box" class="experience-move-box">
          <FancyTitle :text="texts.experiences" class="experience-title hidden-on-smaller-screen"/>
          <div class="big-title experience-smaller-title
            show-on-smaller-screen" v-html="texts.experiences"></div>
          <div class="experience-box">
            <div class="company-box">
              <div class="company-logo"><img src="../assets/kt-logo.png"/></div>
              <div class="period-box">
                <div class="calendar-block" v-html="texts.periodStart"></div>
                <div class="arrow-block" v-html="texts.periodArrow"></div>
                <div class="calendar-block" v-html="texts.periodEnd"></div>
              </div>
              <div class="clear-box"></div>
              <div class="company-name-box">
                <div class="company-name" v-html="texts.companyName"></div>
                <div class="company-position" v-html="texts.jobTitle"></div>
              </div>
              <div class="experience-break"></div>
              <div class="position-details">
                <div v-html="texts.positionDetail"></div>
                <br>
                <div class="blue-bold-text" v-html="texts.overseaTitle"></div>
                <div v-html="texts.overseaDetails"></div>
              </div>
              <div class="experience-break"></div>
            </div>
            <div class="company-box">
              <div class="company-logo"><img src="../assets/zaiko-logo.png"/></div>
              <div class="period-box">
                <div class="calendar-block" v-html="texts.periodStart2"></div>
                <div class="arrow-block" v-html="texts.periodArrow2"></div>
                <div class="calendar-block" v-html="texts.periodEnd2"></div>
              </div>
              <div class="clear-box"></div>
              <div class="company-name-box">
                <div class="company-name" v-html="texts.companyName2"></div>
                <div class="company-position" v-html="texts.jobTitle2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-right-container">
        <div id="certificate-move-box" class="certificate-move-box">
          <FancyTitle :text="texts.certificatesTitle"
            class="certificate-title hidden-on-smaller-screen"/>
          <div class="big-title certificate-smaller-title
            show-on-smaller-screen" v-html="texts.certificatesTitle"></div>
          <div class="certificate-details">
            <div v-for="(certificate, index) in texts.certificates" :key="index">
              <div v-html="certificate"></div>
              <div class="experience-break" v-if="index + 1 < texts.certificates.length"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div :class="{ 'section-container': true, 'show-on-mobile': true,
      'hidden': scrollValue <= 200 || scrollValue >= 1000 }">
      <div class="full-container" id="mobile-experience-move-box">
        <div :class="{ 'eduex-box': true }">
          <div class="big-mobile-title" v-html="texts.education"></div>
          <div v-html="texts.educationInfo"></div>
          <div class="bottom-border" v-html="texts.educationRef"></div>
          <div class="big-mobile-title" v-html="texts.experiences"></div>
          <div class="company-name-mobile" v-html="texts.companyName"></div>
          <div class="company-position-mobile" v-html="texts.jobTitle"></div>
          <div v-html="texts.positionDetail"></div>
          <div class="blue-bold-text" v-html="texts.overseaTitle"></div>
          <div class="bottom-border" v-html="texts.overseaDetails"></div>
          <div class="big-mobile-title" v-html="texts.currentPosition"></div>
          <div class="company-name-mobile" v-html="texts.companyName2"></div>
          <div class="company-position-mobile" v-html="texts.jobTitle2"></div>
          <div class="bottom-border" v-html="texts.positionDetail2"></div>
          <div class="big-mobile-title" v-html="texts.certificatesTitle"></div>
          <div v-for="(certificate, index) in texts.certificates" :key="index">
            <div v-html="certificate"></div>
          </div>
        </div>
      </div>
    </div>

    <div :class="{ 'section-container': true,
      'hidden': scrollValue <= 800 || scrollValue >= 1500 }">
      <div id="project-move-box" class="project-move-box">
        <div class="project-box">
          <FancyTitle :text="texts.sections[2]" class="project-title hidden-on-smaller-screen"/>
          <div class="big-title project-smaller-title
            show-on-smaller-screen" v-html="texts.sections[2]"></div>
          <BrowseProjects class="timeline-browser" :projectsArray="projects"/>
        </div>
      </div>
    </div>

    <div :class="{ 'section-container': true,
      'hidden': scrollValue < 1200 }">
      <div id="contact-move-box" class="contact-move-box">
        <FancyRoll class="contact-box">
          <div class="contact-title">
            {{texts.sections[3]}}
          </div>
          <div class="contact-item hidden-on-mobile"
            v-for="(contact, index) in contacts" :key="index">
            <FlipBox :normalText="contact.title" :hoverText="contact.info"
              :uniqueIndex="index" class="contact-flip-box"/>
          </div>
          <a :href="texts.pdfLink" target="_blank"
            class="contact-resume" v-html="texts.pdfResume"></a>
        </FancyRoll>
        <FancyTitle :text="texts.skillTags" class="skill-title hidden-on-smaller-screen"/>
        <div class="skill-tag-container hidden-on-mobile">
          <div class="big-title skill-smaller-title
            show-on-smaller-screen" v-html="texts.skillTags"></div>
          <div class="skill-tag-wrapper" v-for="(skill, index) in skills" :key="index">
            <div class="skill-tag" :style="{'background': skill.color}">
              {{skill.keyword}}
            </div>
          </div>
          <div class="skill-short-intro" v-html="texts.skillShortIntro"></div>
        </div>
      </div>
    </div>

    <div :class="{'bottom-info': true,
      'bottom-info-show': currentSection === 4, 'bottom-info-hide': currentSection < 4}">
      <div class="bottom-text hidden-on-mobile" v-html="texts.bottomDisclaimer"></div>
      <div class="bottom-text show-on-mobile" v-html="texts.bottomMobile"></div>
    </div>

    <BottomCounter :sectionDescriptions="texts.sections"
      :homepageAcctiveSection="currentSection"
      @changeSection="sectionIndex => { currentSection = sectionIndex; handleSelectSection(); }"/>
  </div>
</template>

<script>
import textdata from '../data/textdata';
import metadata from '../data/homemeta';
import projectsArray from '../data/projects';
import contactsArray from '../data/contacts';
import skillsArray from '../data/skilltags';
import BottomCounter from './BottomCounter.vue';
import FancyTitle from '../parts/FancyTitle.vue';
import BrowseProjects from './BrowseProjects.vue';
import FancyRoll from '../parts/FancyRoll.vue';
import FlipBox from '../parts/FilpBox.vue';

export default {
  name: 'HomePage',
  metaInfo: {
    title: 'Nguyen Tuyet Ngan\'s resume',
    meta: metadata,
  },
  components: {
    BottomCounter,
    FancyTitle,
    BrowseProjects,
    FancyRoll,
    FlipBox,
  },
  props: {
    msg: String,
  },
  created() {
    window.scrollTo(0, 0);
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.sectionHeight = Number(getComputedStyle(document.getElementsByClassName('section-container')[0]).height.slice(0, -2));
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  data() {
    return {
      sectionHeight: 0,
      currentSection: 1,
      scrollValue: 0,
      texts: textdata,
      projects: projectsArray.data,
      contacts: contactsArray.data,
      skills: skillsArray.data,
    };
  },
  methods: {
    handleScroll() {
      // console.log(window.scrollY);
      this.scrollValue = window.scrollY;
      this.currentSection = Math.min(this.texts.sections.length,
        parseInt(this.scrollValue / 500, 10) + 1);

      // section 1
      const portraitMoveBox = document.getElementById('portrait-move-box');
      const nameMoveBox = document.getElementById('name-move-box');
      // section 2
      const educationMoveBox = document.getElementById('education-move-box');
      const experienceMoveBox = document.getElementById('experience-move-box');
      const certificateMoveBox = document.getElementById('certificate-move-box');
      const mobileEduexMoveBox = document.getElementById('mobile-experience-move-box');
      // section 3
      const projectMoveBox = document.getElementById('project-move-box');
      // section 4
      const contactMoveBox = document.getElementById('contact-move-box');

      if (this.currentSection === 1) {
        portraitMoveBox.style.right = `${this.scrollValue / 5}%`;
        nameMoveBox.style.left = `${this.scrollValue / 5}%`;
      } else {
        portraitMoveBox.style.right = '100%';
        nameMoveBox.style.left = '100%';
      }

      if ((this.currentSection === 1 && this.scrollValue >= 200) || this.currentSection === 2) {
        if (this.scrollValue >= 200 && this.scrollValue < 500) {
          const tempOpacity = `${(this.scrollValue - 200) / 3}%`;
          educationMoveBox.style.opacity = tempOpacity;
          experienceMoveBox.style.opacity = tempOpacity;
          certificateMoveBox.style.opacity = tempOpacity;
          mobileEduexMoveBox.style.opacity = tempOpacity;
        } else if (this.scrollValue >= 500 && this.scrollValue <= 700) {
          educationMoveBox.style.opacity = '100%';
          experienceMoveBox.style.opacity = '100%';
          certificateMoveBox.style.opacity = '100%';
          mobileEduexMoveBox.style.opacity = '100%';
        } else if (this.scrollValue > 700 && this.scrollValue <= 1000) {
          const tempOpacity = `${(1000 - this.scrollValue) / 3}%`;
          educationMoveBox.style.opacity = tempOpacity;
          experienceMoveBox.style.opacity = tempOpacity;
          certificateMoveBox.style.opacity = tempOpacity;
          mobileEduexMoveBox.style.opacity = tempOpacity;
        }
      } else {
        educationMoveBox.style.opacity = '0';
        experienceMoveBox.style.opacity = '0';
        certificateMoveBox.style.opacity = '0';
        mobileEduexMoveBox.style.opacity = '0';
      }

      if ((this.currentSection === 2 && this.scrollValue >= 700) || this.currentSection === 3) {
        if (this.scrollValue >= 700 && this.scrollValue < 1000) {
          const tempDeg = ((this.scrollValue - 700) / 10) * 3;
          const tempOpacity = `${(this.scrollValue - 700) / 3}%`;
          projectMoveBox.style.transform = `rotateX(${90 - tempDeg}deg)`;
          projectMoveBox.style.opacity = tempOpacity;
        } else if (this.scrollValue >= 1000 && this.scrollValue <= 1200) {
          projectMoveBox.style.transform = 'rotateX(0deg)';
          projectMoveBox.style.opacity = '100%';
        } else if (this.scrollValue > 1200 && this.scrollValue <= 1500) {
          const tempDeg = ((1500 - this.scrollValue) / 10) * 3;
          const tempOpacity = `${(1500 - this.scrollValue) / 3}%`;
          projectMoveBox.style.transform = `rotateX(${90 - tempDeg}deg)`;
          projectMoveBox.style.opacity = tempOpacity;
        }
      } else {
        projectMoveBox.style.transform = 'rotateX(0deg)';
      }

      if ((this.currentSection === 3 && this.scrollValue >= 1200) || this.currentSection === 4) {
        if (this.scrollValue >= 1200 && this.scrollValue < 1500) {
          const tempOpacity = `${(this.scrollValue - 1200) / 3}%`;
          contactMoveBox.style.opacity = tempOpacity;
        } else if (this.scrollValue >= 1500) {
          contactMoveBox.style.opacity = '100%';
        }
      } else {
        contactMoveBox.style.opacity = '0%';
      }

      // this.currentSection = Math.min(this.texts.sections.length,
      //   parseInt(this.scrollValue / 500, 10) + 1);
    },
    handleSelectSection() {
      window.scrollTo(0, (this.currentSection - 1) * 500);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* for mobile content */
.hidden-on-smaller-screen {
  display: none;
}
.hidden-on-mobile {
  display: none;
}
.show-on-mobile {
  display: block;
}
/* main components */
.home-content {
  width: 100%;
  height: calc(1500px + 100vh - 60px);
  padding-top: 60px;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #ffffff;
  transition: all 200ms ease-in-out;
}
.section-background-brick {
  background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%2333b4d7' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.section-background-jigsaw {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Cpath fill='%2333b4d7' fill-opacity='0.4' d='M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z'%3E%3C/path%3E%3C/svg%3E");
}
.section-background-circuit {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%2333b4d7' fill-opacity='0.4' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
}
.section-background-cloud {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%2333b7d4' fill-opacity='0.4' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");
}
.section-container {
  width: 100%;
  height: calc(100vh - 5rem - 60px);
  position: fixed;
  top: 60px;
  left: 0px;
}
.hidden {
  visibility: hidden;
}
.show {
  visibility: visible;
}
.full-container {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
}
.left-container {
  height: 50%;
  width: 100%;
  position: relative;
  float: left;
}
.right-container {
  height: 50%;
  width: 100%;
  position: relative;
  float: right;
}
.top-container {
  height: 30%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
}
.large-left-container {
  width: 100%;
}
.top-right-container {
  width: 100%;
}
.bottom-right-container {
  width: 100%;
}
/* introduction section */
.introduction-section {
  z-index: 50;
}
/* portrait */
.portrait-move-box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  right: 0%;
}
.portrait-box {
  width: 487px;
  height: 700px;
  overflow: hidden;
  box-shadow:#33B4D7 20px 20px 0px -3px, rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
   rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  position: absolute;
  top: 10%;
  right: 50%;
  transform: translate(50%, 0%);
  zoom: 50%;
}
/* name & title */
.name-move-box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0%;
}
.name-box {
  width: calc(90% - 50px);
  height: 100px;
  background-color: #33B4D7;
  text-align: center;
  line-height: 100px;
  position: absolute;
  top: 40%;
  left: 5%;
  font-family: 'Asap Condensed', sans-serif;
  font-size: 5vw;
  color: #212121;
  box-shadow:rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  z-index: 2;
}
.job-title-box {
  width: calc(90% - 50px);
  height: 125px;
  background-color: #212121;
  color: #FFF;
  text-align: center;
  line-height: 160px;
  position: absolute;
  top: calc(40% + 50px);
  left: calc(5% + 50px);
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 4.5vw;
  box-shadow:rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  z-index: 1;
}
/* biography section */
/* education */
.eduex-box {
  width: calc(100% - 50px);
  max-height: calc(100% - 50px);
  padding: 5px;
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #FFF;
  box-shadow:#212121 10px 10px 0px -3px,
   rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  text-align: left;
  overflow: auto;
  font-size: 2vh;
}
.eduex-box::-webkit-scrollbar {
  display: block;
}
.eduex-box::-webkit-scrollbar {
  width: 2px;
}
.bottom-border {
  width: 100%;
  border-bottom: 1px solid #212121;
  margin-bottom: 5px;
}
.education-move-box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0%;
  opacity: 0;
}
.education-title {
  margin: auto;
  margin-top: 50px;
  position: relative;
  z-index: 100;
}
.education-smaller-title {
  margin: auto;
  margin-top: 30px;
  position: relative;
  z-index: 100;
}
.education-box {
  position: absolute;
  top: 5%;
  left: 2%;
  width: calc(95% - 60px);
  height: fit-content;
  background-color: #FFF;
  padding: 30px;
  text-align: left;
  box-shadow:#212121 10px 10px 0px -3px,
   rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
/* experience */
.big-title {
  color: #33B4D7;
  text-shadow: 2px 2px #212121;
  font-family: 'Asap Condensed', sans-serif;
  font-weight: bold;
  font-size: 40px;
  text-transform: uppercase;
}
.big-mobile-title {
  color: #33B4D7;
  text-shadow: 2px 2px #212121;
  font-family: 'Asap Condensed', sans-serif;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
}
.show-on-smaller-screen {
  display: block;
}
.experience-move-box {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.experience-title {
  width: 500px;
  height: 125px;
  position: absolute;
  top: 10%;
  left: 10%;
  z-index: 1;
}
.experience-smaller-title {
  width: fit-content;
  height: 125px;
  position: absolute;
  top: calc(10% + 20px);
  left: 15%;
  z-index: 1;
}
.experience-box {
  width: 80%;
  position: absolute;
  top: calc(10% + 75px);
  left: 10%;
  padding-top: 100px;
  padding-bottom: 20px;
  background-color: #FFF;
  box-shadow:#212121 10px 10px 0px -3px,
   rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.company-box {
  position: relative;
  padding-bottom: 10px;
}
.company-logo {
  display: block;
  float: left;
  padding-left: 2%;
}
.company-name-box {
  float: left;
  padding-left: 2%;
  height: 80px;
  text-align: left;
}
.company-name {
  width: 100%;
  /* height: 50px; */
  /* line-height: 50px; */
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
}
.company-position {
  width: 100%;
  /* height: 30px; */
  /* line-height: 30px; */
  font-family: 'Asap Condensed', sans-serif;
  color: #33B4D7;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
}
.company-name-mobile {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
}
.company-position-mobile {
  font-family: 'Asap Condensed', sans-serif;
  color: #33B4D7;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  text-align: left;
}
.period-box {
  float: right;
  padding-right: 2%;
}
.clear-box {
  clear: both;
}
.calendar-block {
  display: block;
  background-color: #212121;
  color: #FFF;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  float: left;
  height: 60px;
  text-align: center;
  line-height: 30px;
  padding: 10px;
}
.arrow-block {
  display: block;
  color: #33B4D7;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  float: left;
  height: 60px;
  line-height: 20px;
}
.experience-break {
  width: 96%;
  margin: auto;
  border-bottom: 2px solid #212121;
  clear: both;
  height: 10px;
}
.position-details {
  padding: 10px;
  margin: auto;
  width: 96%;
  text-align: justify;
}
.blue-bold-text {
  color: #33B4D7;
  font-weight: bold;
  font-family: 'Asap Condensed', sans-serif;
  font-size: 20px;
}
/* certificate */
.certificate-move-box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  bottom: 0%;
  opacity: 0;
}
.certificate-title {
  margin: auto;
  margin-top: 10%;
  width: 500px;
  position: relative;
  z-index: 1;
}
.certificate-smaller-title {
  margin: auto;
  margin-top: 10%;
  position: relative;
  z-index: 1;
}
.certificate-details {
  width: 90%;
  position: relative;
  margin: auto;
  margin-top: calc(10% + 75px);
  padding-top: 100px;
  padding-bottom: 20px;
  background-color: #FFF;
  box-shadow:#212121 10px 10px 0px -3px,
   rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  font-weight: bold;
  font-family: 'Asap Condensed', sans-serif;
  font-size: 20px;
}
/* project section */
.project-move-box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  transform-style: preserve-3d;
  perspective: 1500px;
  transform: rotateX(0deg);
  opacity: 100%;
}
.project-title {
  width: 500px;
  position: absolute;
  top: 3%;
  left: calc(50% - 250px);
}
.project-smaller-title {
  width: 100%;
  margin: auto;
  margin-top: -10px;
  font-size: 20px;
}
.project-box {
  background-color: #FFF;
  width: 90%;
  height: 90%;
  position: absolute;
  top: 5%;
  left: 5%;
  box-shadow:#212121 10px 10px 0px -3px,
   rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
   z-index: 50;
}
.timeline-browser {
  width: 97%;
  height: 94%;
  position: absolute;
  bottom: 3%;
  left: 3%;
}
/* skills section */
.contact-move-box {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.contact-box {
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.contact-title {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  font-weight: bold;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 50px;
  text-transform: uppercase;
  position: relative;
}
.contact-item {
  padding: 10px;
  position: relative;
  margin: auto;
  line-height: 50px;
}
.contact-flip-box {
  width: 200px;
  height: 50px;
  position: relative;
  margin: auto;
}
.contact-resume {
  display: block;
  margin: auto;
  border-top: 10px solid #33B4D7;
  text-decoration: none;
  width: 200px;
  height: 50px;
  line-height: 50px;
  background-color: #212121;
  color: #FFF;
  font-weight: bold;
  transition: letter-spacing 200ms ease-in-out;
}
.contact-resume:hover {
  letter-spacing: 2px;
}
.skill-title {
  position: absolute;
  top: calc(50% - 300px);
  right: calc(10% + 25px);
  width: 500px;
  z-index: 1;
}
.skill-smaller-title {
  width: 100%;
  margin: auto;
  margin-top: -70px;
  font-size: 40px;
}
.skill-tag-container {
  background: #FFF;
  padding: 20px;
  padding-top: 50px;
  width: 50%;
  height: fit-content;
  position: absolute;
  right: 10%;
  top: 30px;
  box-shadow:#212121 20px 20px 0px -3px,
   rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
   text-align: justify;
}
.skill-tag-wrapper {
  display: inline-block;
  padding: 5px;
  width: fit-content;
}
.skill-tag {
  height: 30px;
  width: fit-content;
  line-height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 30px;
  color: #FFF;
  font-weight: bold;
  display: inline-block;
}
.skill-short-intro {
  border-top: 5px dashed #212121;
  padding: 10px;
  width: calc(100% - 20px);
  margin-top: 5px;
  font-size: 1.2vw;
}
/* bottom bar */
.bottom-info {
  width: 100%;
  height: 100px;
  position: fixed;
  left: 0px;
  transition: bottom 200ms ease-in-out;
  background-color: #33B4D7;
}
.bottom-info-hide {
  bottom: -100px;
}
.bottom-info-show {
  bottom: 0px;
}
.bottom-text {
  width: calc(100% - 20px);
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translate(0, -50%);
  text-align: center;
  font-weight: bold;
}
@media only screen and (min-width: 768px) and (min-height: 700px) {
  .left-container {
    height: 100%;
    width: 50%;
    position: relative;
    float: left;
  }
  .right-container {
    height: 100%;
    width: 50%;
    position: relative;
    float: right;
  }
  .portrait-box {
    position: absolute;
    top: calc(50% + 30px);
    right: 5%;
    transform: translate(0%, -50%);
    zoom: 75%;
  }
  .hidden-on-mobile {
    display: block;
  }
  .show-on-mobile {
    display: none;
  }
  .education-box {
    top: calc(5% + 40px);
    padding-top: 30px;
  }
  .experience-box {
    top: calc(10% + 45px);
    padding-top: 30px;
  }
  .certificate-details {
    margin-top: -15px;
    padding-top: 30px;
  }
  .large-left-container {
    height: 100%;
    width: 70%;
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
  .top-right-container {
    height: 50%;
    width: 30%;
    position: absolute;
    top: 0px;
    right: 0px;
  }
  .bottom-right-container {
    height: 50%;
    width: 30%;
    position: absolute;
    bottom: 0px;
    right: 0px;
  }
  .timeline-browser {
    height: calc(94% - 35px);
  }
  .project-smaller-title {
    font-size: 40px;
    margin-top: 0px;
  }
  .project-box {
    box-shadow:#212121 20px 20px 0px -3px,
      rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  .contact-box {
    top: calc(50% - 300px);
    left: calc(15% - 150px);
    transform: none;
  }
  .skill-tag-container {
    top: 50%;
    transform: translate(0%, -50%);
  }
}
@media only screen and (min-width: 1060px) and (min-height: 800px) {
  .portrait-box {
    top: calc(50% + 30px);
    right: 5%;
    transform: translate(0%, -50%);
    zoom: 100%;
  }
  .hidden-on-smaller-screen {
    display: block;
  }
  .show-on-smaller-screen {
    display: none;
  }
  .education-box {
    top: calc(5% + 100px);
    padding-top: 100px;
  }
  .experience-box {
    top: calc(10% + 75px);
    left: 10%;
    padding-top: 100px;
  }
  .certificate-details {
    margin-top: calc(10% + 75px);
    padding-top: 100px;
  }
  .timeline-browser {
    height: calc(94% - 175px);
  }
  .skill-tag-container {
    top: calc(50% - 175px);
    transform: none;
  }
}
</style>
