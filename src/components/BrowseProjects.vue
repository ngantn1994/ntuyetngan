<template>
  <div class="browse-container">
    <div class="detail-box">
      <div class="detail-title">
        {{projectsArray[currentProject].title}}
      </div>
      <div class="detail-content"
        v-html="projectsArray[currentProject].details">
      </div>
      <div class="details-icons">
        <div class="details-fixed-height-box">
          <div class="details-icon"
            v-for="(image, index) in projectsArray[currentProject].icons" :key="index">
            <img :src="image"/>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-bar">
      <div v-for="(project, index) in projectsArray" :key="index">
        <div :class="{ 'timeline-bar-item': true,
          'timeline-bar-active': currentProject === index }"
          @click="changeProject(index)"
          :style="{ 'width': `calc(${project.percent}% - 4px)`, 'left': `${project.space}%` }">
          {{project.period}}
          <div :class="{'active-arrow': true, 'show': currentProject === index}"></div>
        </div>
      </div>
      <div class="timeline-bar-highlight"
        :style="{ 'width': `${projectsArray[currentProject].percent}%`,
          'left': `${projectsArray[currentProject].space}%` }"></div>
    </div>
    <div class="timeline-arrow-head"></div>
    <div class="timeline-arrow-tail"></div>
  </div>
</template>

<script>
export default {
  name: 'BrowseProjects',
  props: {
    projectsArray: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentProject: 0,
    };
  },
  methods: {
    changeProject(projectIndex) {
      this.currentProject = projectIndex;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Asap+Condensed&family=Barlow+Condensed&display=swap');

.timeline-bar {
  width: calc(100% - 100px);
  height: 50px;
  position: absolute;
  bottom: 0%;
  left: 50px;
  background-color: #33B4D7;
}
.timeline-arrow-head {
  width: 0px;
  height: 0px;
  border: 25px solid #33B4D7;
  border-color: transparent transparent transparent #33B4D7;
  position: absolute;
  bottom: 0%;
  right: 0%;
}
.timeline-arrow-tail {
  width: 0px;
  height: 0px;
  border: 25px solid #33B4D7;
  border-color: #33B4D7 #33B4D7 #33B4D7 transparent;
  position: absolute;
  bottom: 0%;
  left: 0%;
}
.timeline-bar-item {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Asap Condensed', sans-serif;
  font-size: max(0.9vh, 1vw);
  font-weight: bold;
  position: absolute;
  top: 0px;
  color: #FFF;
  z-index: 1;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
}
.timeline-bar-item:hover {
  border-left: 2px solid #212121;
  border-right: 2px solid #212121;
  cursor: pointer;
}
/* .timeline-bar-active {
  background-color: #212121;
} */
.timeline-bar-highlight {
  background-color: #212121;
  position: absolute;
  top: 0px;
  height: 50px;
  transition: width 500ms ease-in-out, left 500ms ease-in-out,;
}
.active-arrow {
  border: 20px solid #212121;
  border-color: #212121 transparent transparent transparent;
  visibility: hidden;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 1;
}
.show {
  visibility: inherit;
}
.detail-box {
  background-color: #212121;
  width: calc(100% - 40px);
  height: calc(100% - 90px);
  position: absolute;
  top: 0px;
  left: 10px;
  color: #FFF;
  overflow-y: auto;
  padding-bottom: 20px;
}
.detail-title {
  text-align: center;
  width: 90%;
  margin: auto;
  border-bottom: 2px solid #FFF;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: max(2vw, 2vh);
  font-weight: bold;
}
.detail-content {
  text-align: justify;
  margin: auto;
  width: fit-content;
  max-width: 90%;
  font-size: 2vh;
  padding: 20px;
}
.details-icons {
  text-align: center;
  max-width: 90%;
  padding: 1% 2% 1% 2%;
  background-color: #FFF;
  margin: auto;
  overflow-y: auto;
  box-shadow:#33B4D7 5px 5px 0px -3px, rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
   rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  position: relative;
}
::-webkit-scrollbar {
  display: block;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #33B4D7;
}
.details-icons::-webkit-scrollbar-thumb {
  background: #666;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #212121;
}
.details-fixed-height-box {
  height: 60px;
}
.details-icon {
  height: 50px;
  display: inline-block;
  padding: 5px;
}
.details-fixed-height-box {
  height: 50px;
  zoom: 50%
}

@media only screen and (min-height: 750px) and (min-width: 800px) {
  .details-fixed-height-box {
    height: 60px;
    zoom: 100%;
  }
  .details-icons {
    box-shadow:#33B4D7 10px 10px 0px -3px, rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
   rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
}
</style>
