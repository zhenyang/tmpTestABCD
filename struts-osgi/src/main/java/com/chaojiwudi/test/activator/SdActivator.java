package com.chaojiwudi.test.activator;

import org.apache.log4j.Logger;
import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;

public class SdActivator implements BundleActivator {

    static Logger log = Logger.getLogger(SdActivator.class.getName());
    private BundleContext context;

    public void start(BundleContext context) throws Exception {
        log.info("Bundle struts starting");
        this.context = context;
    }

    public void stop(BundleContext context) throws Exception {
        log.info("Bundle struts stopping");
        this.context = null;
    }

}
