import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePointsStore = defineStore("points", ()=> {
    const points = ref({
        points: {1:0, 2:0}
    });

    
    const setPoints = (team_id, new_points) => {
        points.value.points[team_id] = new_points
    }

    return {
        points,
        setPoints,

    }
})


