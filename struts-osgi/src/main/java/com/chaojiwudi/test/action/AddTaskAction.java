package com.chaojiwudi.test.action;

import org.apache.log4j.Logger;

public class AddTaskAction {
    static Logger log = Logger.getLogger(AddTaskAction.class.getName());
    private String name;

    public String execute() throws Exception {
        log.info("Running TaskAddAction");
        return "success";
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
