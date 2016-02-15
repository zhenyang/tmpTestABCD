package sd.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class IndexController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String welcome(Model model) {
        model.addAttribute("userName", "Feng Zhichao");
        return "index/welcome";
    }

    @RequestMapping(value = "/learn", method = RequestMethod.GET)
    public String learn() {
        return "index/learn";
    }
}
