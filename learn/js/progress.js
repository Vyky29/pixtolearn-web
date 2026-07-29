/**
 * PixtoLearn Academy - local progress (preview / Phase 1)
 * Key: pixto_academy_progress
 * Shape: { [courseId]: { modules: { [moduleId]: "not-started"|"in-progress"|"completed" }, updatedAt } }
 */
(function (global) {
  "use strict";

  var STORAGE_KEY = "pixto_academy_progress";
  var ACCOUNT_KEY = "ptl_account_v1";

  function readAll() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") || {};
    } catch (_) {
      return {};
    }
  }

  function writeAll(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (_) {}
  }

  function getCourse(courseId) {
    var all = readAll();
    var course = all[courseId];
    if (!course || typeof course !== "object") {
      return { modules: {}, updatedAt: null };
    }
    return {
      modules: course.modules && typeof course.modules === "object" ? course.modules : {},
      updatedAt: course.updatedAt || null,
    };
  }

  function setModuleStatus(courseId, moduleId, status) {
    var all = readAll();
    if (!all[courseId]) all[courseId] = { modules: {} };
    if (!all[courseId].modules) all[courseId].modules = {};
    all[courseId].modules[moduleId] = status;
    all[courseId].updatedAt = new Date().toISOString();
    writeAll(all);
    return getCourse(courseId);
  }

  function markInProgress(courseId, moduleId) {
    var current = getCourse(courseId).modules[moduleId];
    if (current === "completed") return getCourse(courseId);
    return setModuleStatus(courseId, moduleId, "in-progress");
  }

  function markComplete(courseId, moduleId) {
    return setModuleStatus(courseId, moduleId, "completed");
  }

  function getModuleStatus(courseId, moduleId) {
    return getCourse(courseId).modules[moduleId] || "not-started";
  }

  function getProgress(courseId, moduleIds) {
    var ids = moduleIds || [];
    if (!ids.length) return { completed: 0, total: 0, percent: 0, nextId: null };
    var modules = getCourse(courseId).modules;
    var completed = 0;
    var nextId = null;
    for (var i = 0; i < ids.length; i++) {
      var st = modules[ids[i]] || "not-started";
      if (st === "completed") completed += 1;
      else if (!nextId) nextId = ids[i];
    }
    var percent = Math.round((completed / ids.length) * 100);
    return { completed: completed, total: ids.length, percent: percent, nextId: nextId };
  }

  function statusLabel(status) {
    if (status === "completed") return "Completed";
    if (status === "in-progress") return "In progress";
    return "Not started";
  }

  function statusClass(status) {
    if (status === "completed") return "is-completed";
    if (status === "in-progress") return "is-progress";
    return "is-not-started";
  }

  function readAccount() {
    try {
      return JSON.parse(localStorage.getItem(ACCOUNT_KEY) || "null");
    } catch (_) {
      return null;
    }
  }

  function displayName() {
    var user = readAccount();
    if (user && user.name) return String(user.name).split(" ")[0] || "Learner";
    if (user && user.email) {
      var local = String(user.email).split("@")[0] || "Learner";
      return local.replace(/[._-]+/g, " ").replace(/\b\w/g, function (c) {
        return c.toUpperCase();
      });
    }
    return "Learner";
  }

  global.PixtoAcademyProgress = {
    STORAGE_KEY: STORAGE_KEY,
    getCourse: getCourse,
    getModuleStatus: getModuleStatus,
    markInProgress: markInProgress,
    markComplete: markComplete,
    getProgress: getProgress,
    statusLabel: statusLabel,
    statusClass: statusClass,
    readAccount: readAccount,
    displayName: displayName,
  };
})(typeof window !== "undefined" ? window : this);
