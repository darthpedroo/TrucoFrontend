import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePointsStore = defineStore("points", ()=> {
    const points = ref({
        points: {1:0, 2:0}
    });

    
    const setPoints = (team_id, new_points) => {
        if (new_points < 0) {
            return
        }

        points.value.points[team_id] = new_points
    }

    const resetPoints = () => {
        points.value.points = {1:0, 2:0}
    }

    return {
        points,
        setPoints,
        resetPoints,
    }
})


