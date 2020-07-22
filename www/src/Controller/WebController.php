<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;


class WebController extends AbstractController
{
    /**
     * @Route("/", name="web_home")
     */
    public function web_index() {
        return $this->render('web/index.html.twig');
    }
    /**
     * @Route("/admin", name="redir_admin")
     */
    public function redir() {
        //return $this->redirectToRoute('app_home', ['reactRouting' => "home"], 301);
        return $this->redirect('/admin/dashboard');
    }
    /**
     * @Route("/admin/{reactRouting}", name="admin_react", defaults={"reactRouting": null})
     */
    public function admin_index() {
        return $this->render('app/index.html.twig');
    }
}
